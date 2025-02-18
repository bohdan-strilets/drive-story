import { HttpStatus, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { checkAccess } from 'src/common/helpers/check-access.helper';
import { AppError } from 'src/error/app-error';
import { errorMessages } from 'src/error/helpers/error-messages.helper';
import { PushRepository } from 'src/push/push.repository';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
import { Reminder, ReminderDocument } from './schemas/reminder.schema';

export class ReminderRepository {
  private readonly logger = new Logger(ReminderRepository.name);

  constructor(
    @InjectModel(Reminder.name) private reminderModel: Model<ReminderDocument>,
    private readonly sendgridService: SendgridService,
    private readonly pushRepository: PushRepository,
  ) {}

  async findReminder(reminderId: Types.ObjectId): Promise<ReminderDocument> {
    const reminder = await this.reminderModel.findById(reminderId);

    if (!reminder) {
      this.logger.error(errorMessages.REMINDER_NOT_FOUND);
      throw new AppError(
        HttpStatus.NOT_FOUND,
        errorMessages.REMINDER_NOT_FOUND,
      );
    }

    return reminder;
  }

  async findReminderAndCheckAccess(
    reminderId: Types.ObjectId,
    userId: Types.ObjectId,
  ): Promise<ReminderDocument> {
    const reminder = await this.findReminder(reminderId);
    checkAccess(reminder.owner, userId);
    return reminder;
  }

  async findDueReminders(): Promise<ReminderDocument[]> {
    const now = new Date();

    const offsetInMs = 24 * 60 * 60 * 1000;
    const marginInMs = 60 * 1000;

    const startWindow = new Date(now.getTime() + offsetInMs - marginInMs);
    const endWindow = new Date(now.getTime() + offsetInMs + marginInMs);

    return this.reminderModel.find({
      reminderDate: { $gte: startWindow, $lt: endWindow },
      isSent: false,
    });
  }

  async markAsSent(
    reminderId: Types.ObjectId,
    userId: Types.ObjectId,
  ): Promise<void> {
    await this.findReminderAndCheckAccess(reminderId, userId);
    await this.reminderModel.findByIdAndUpdate(
      reminderId,
      { isSent: true },
      { new: true },
    );
  }

  async sendNotification(
    reminderId: Types.ObjectId,
    userId: Types.ObjectId,
    userEmail: string,
  ): Promise<void> {
    const reminder = await this.findReminder(reminderId);

    try {
      const pushPayload = this.pushRepository.createPayload(reminder);
      const subscriptionByBd =
        await this.pushRepository.findSubscription(userId);
      const pushSubscription =
        this.pushRepository.getSubscription(subscriptionByBd);

      await this.pushRepository.sendNotification(pushSubscription, pushPayload);
    } catch (error) {
      this.logger.error('Error while sending push notification', error.stack);
    }

    try {
      await this.sendgridService.sendReminderEmail(
        userEmail,
        reminder.title,
        reminder.reminderDate,
        reminder.message,
        reminder.eventUrl,
      );
    } catch (error) {
      this.logger.error('Error while sending email notification', error.stack);
    }

    await this.markAsSent(reminder._id, userId);
    this.logger.debug('Email notification was sent successfully.');
  }
}
