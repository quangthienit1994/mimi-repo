import { Module } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { ListenerService2 } from './listener.service2';
import { ListenerController } from './listener.controller';
import { DatabaseModule } from '../../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Listener, ListenerSchema } from './listener.schema';
import { MongooseConfigService } from '../../database.service';

@Module({
  providers: [ListenerService2,ListenerService],
  controllers: [ListenerController],
  exports: [ListenerService],
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: Listener.name, schema: ListenerSchema }
    ], MongooseConfigService.CONNECTION_NAME)
  ]
})
export class ListenerModule {}
