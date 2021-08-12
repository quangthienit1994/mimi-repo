import { Module } from '@nestjs/common';
import { MongooseConfigService } from '../database.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      connectionName: MongooseConfigService.CONNECTION_NAME,
      useClass: MongooseConfigService,
    }),
  ]
})
export class DatabaseModule {}
