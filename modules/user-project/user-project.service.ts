import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserProject, UserProjectDocument } from '../../schemas/user-project.schema';
import { Model } from 'mongoose';
import { UserJoinProjectValidator } from '../../validations/user-join-project.validator';
import * as moment from 'moment';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { events } from '../../constants/event.constant';
import { StaffService } from '../staff/staff.service';

/**
 * TODO: transform to event-listener module
 * Currently, event not working on other modules
 */
@Injectable()
export class UserProjectService {
  constructor(
    @InjectModel(UserProject.name) protected model: Model<UserProjectDocument>,
    protected event: EventEmitter2,
    private readonly staffService: StaffService,
  ) {
  }

  async join(userId: string, args: UserJoinProjectValidator) {
    const joinDate = moment().format('L');
    const project = new this.model({
      joinDate: joinDate,
      projectCode: args.projectCode,
      staffCode: args.staffCode,
      userId: userId,
    });
    await project.save();
    this.event.emit(events.USER_JOIN_PROJECT, project);
    await this.staffService.update(project.staffCode, { userId: project.userId, joinDate: project.joinDate });
    return project;
  }

  async leave(_id: string) {
    const leaveDate = moment().format('L');
    const project = await this.model.findByIdAndUpdate({ _id }, { leaveDate }, { new: true });
    this.event.emit(events.USER_LEAVE_PROJECT, project);
    await this.staffService.update(project.staffCode, { leaveDate: project.leaveDate });
    return project;
  }

  async findByUserId(_id: string) {
    return this.model.find({ userId: _id });
  }

}
