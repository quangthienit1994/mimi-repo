import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB } from './env';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ProjectModule } from './modules/project/project.module';
import { DatabaseModule } from './modules/database/database.module';
import { StoreModule } from './modules/store/store.module';
import { UserProjectModule } from './modules/user-project/user-project.module';
import { StaffModule } from './modules/staff/staff.module';
import { PositionModule } from './modules/position/position.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { JobModule } from './modules/job/job.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${DB.mongo.connect}/${DB.mongo.name}`, DB.mongo.options),
    UserModule,
    AuthModule,
    ProfileModule,
    ProjectModule,
    DatabaseModule,
    StoreModule,
    UserProjectModule,
    StaffModule,
    PositionModule,
    EventEmitterModule.forRoot(),
    JobModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
