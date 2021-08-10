import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { events } from '../../constants/event.constant';
import { UserProject } from '../../schemas/user-project.schema';
import { StaffService } from './staff.service';

@Injectable()
export class UserJoinedProjectListener {
  constructor(
    private readonly staffService: StaffService,
  ) {
  }

  @OnEvent("**")
  onAllEvent(...args){
    console.log('all events called', args);
  }

  @OnEvent(events.USER_JOIN_PROJECT, { async: true })
  async onUserJoinProject(project: UserProject) {
    console.log(project);
    await this.staffService.update(project.staffCode, { userId: project.userId, joinDate: project.joinDate });
  }

  @OnEvent(events.USER_LEAVE_PROJECT)
  async onUserLeaveProject(project: UserProject) {
    await this.staffService.update(project.staffCode, { leaveDate: project.leaveDate });
  }
}
