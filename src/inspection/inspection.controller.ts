import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ParseObjectIdPipe } from 'src/car/pipes/parse-objectid.pipe';
import { ApiResponse } from 'src/response/types/api-response.type';
import { User } from 'src/user/decorators/user.decorator';
import { InspectionDto } from './dto/inspection.dto';
import { InspectionService } from './inspection.service';
import { InspectionDocument } from './schemas/inspection.schema';

@Auth()
@Controller('v1/inspection')
export class InspectionController {
  constructor(private readonly inspectionService: InspectionService) {}

  @Post('add/:carId')
  async add(
    @Body() dto: InspectionDto,
    @User('_id', ParseObjectIdPipe) userId: Types.ObjectId,
    @Param('carId', ParseObjectIdPipe) carId: Types.ObjectId,
  ): Promise<ApiResponse<InspectionDocument>> {
    return this.inspectionService.add(userId, carId, dto);
  }

  @Patch('update/:carId/:accessoryId')
  async update(
    @Body() dto: InspectionDto,
    @Param('accessoryId', ParseObjectIdPipe) accessoryId: Types.ObjectId,
    @Param('carId', ParseObjectIdPipe) carId: Types.ObjectId,
    @User('_id', ParseObjectIdPipe) userId: Types.ObjectId,
  ): Promise<ApiResponse<InspectionDocument>> {
    return this.inspectionService.update(accessoryId, carId, userId, dto);
  }

  @Delete('delete/:carId/:accessoryId')
  async delete(
    @Param('accessoryId', ParseObjectIdPipe) accessoryId: Types.ObjectId,
    @Param('carId', ParseObjectIdPipe) carId: Types.ObjectId,
    @User('_id', ParseObjectIdPipe) userId: Types.ObjectId,
  ): Promise<ApiResponse<InspectionDocument>> {
    return this.inspectionService.delete(accessoryId, carId, userId);
  }

  @Get('by-id/:carId/:accessoryId')
  async byId(
    @Param('accessoryId', ParseObjectIdPipe) accessoryId: Types.ObjectId,
    @Param('carId', ParseObjectIdPipe) carId: Types.ObjectId,
    @User('_id', ParseObjectIdPipe) userId: Types.ObjectId,
  ): Promise<ApiResponse<InspectionDocument>> {
    return this.inspectionService.byId(accessoryId, carId, userId);
  }

  @Get('all/:carId')
  async all(
    @Param('carId', ParseObjectIdPipe) carId: Types.ObjectId,
    @User('_id', ParseObjectIdPipe) userId: Types.ObjectId,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<ApiResponse<InspectionDocument[]>> {
    return this.inspectionService.all(carId, userId, page, limit);
  }

  @Get('bind-contact/:carId/:accessoryId')
  async bindContact(
    @Param('accessoryId', ParseObjectIdPipe) accessoryId: Types.ObjectId,
    @Param('carId', ParseObjectIdPipe) carId: Types.ObjectId,
    @Query('contactId', ParseObjectIdPipe) contactId: Types.ObjectId,
    @User('_id', ParseObjectIdPipe) userId: Types.ObjectId,
  ): Promise<ApiResponse<InspectionDocument>> {
    return this.inspectionService.bindContact(
      accessoryId,
      carId,
      contactId,
      userId,
    );
  }
}
