import { forwardRef, HttpStatus, Inject, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CarRepository } from 'src/car/car.repository';
import { AppError } from 'src/error/app-error';
import { errorMessages } from 'src/error/helpers/error-messages.helper';
import { EntityType } from 'src/image/enums/entity-type.enum';
import { ImageRepository } from 'src/image/image.repository';
import { Fueling, FuelingDocument } from './schemas/fueling.schema';

export class FuelingRepository {
  private readonly logger = new Logger(FuelingRepository.name);

  constructor(
    @InjectModel(Fueling.name) private fuelingModel: Model<FuelingDocument>,
    private readonly carRepository: CarRepository,
    @Inject(forwardRef(() => ImageRepository))
    private readonly imageRepository: ImageRepository,
  ) {}

  async findFueling(fuelingId: Types.ObjectId): Promise<FuelingDocument> {
    const fueling = await this.fuelingModel
      .findById(fuelingId)
      .populate('photos')
      .populate('contactId');

    if (!fueling) {
      this.logger.error(errorMessages.FUELING_NOT_FOUND);
      throw new AppError(HttpStatus.NOT_FOUND, errorMessages.FUELING_NOT_FOUND);
    }

    return fueling;
  }

  async findFuelingAndCheckAccessRights(
    fuelingId: Types.ObjectId,
    carId: Types.ObjectId,
    userId: Types.ObjectId,
  ): Promise<FuelingDocument> {
    const fueling = await this.findFueling(fuelingId);
    this.carRepository.checkAccessRights(fueling.carId, carId);
    this.carRepository.checkAccessRights(fueling.owner, userId);
    return fueling;
  }

  async updateFueling(
    fuelingId: Types.ObjectId,
    carId: Types.ObjectId,
    userId: Types.ObjectId,
    dto: any,
  ): Promise<FuelingDocument> {
    await this.findFuelingAndCheckAccessRights(fuelingId, carId, userId);

    return await this.fuelingModel
      .findByIdAndUpdate(fuelingId, dto, { new: true })
      .populate('photos')
      .populate('contactId');
  }

  async bindImage(
    fuelingId: Types.ObjectId,
    data: Types.ObjectId | null,
  ): Promise<FuelingDocument> {
    await this.findFueling(fuelingId);
    return await this.fuelingModel.findByIdAndUpdate(
      fuelingId,
      { photos: data },
      { new: true },
    );
  }

  async deleteImages(fueling: FuelingDocument): Promise<void> {
    const photos = fueling.photos;

    if (photos) {
      await this.imageRepository.removedAllFiles(
        photos._id,
        EntityType.FUELING,
        fueling._id,
      );
    }
  }
}
