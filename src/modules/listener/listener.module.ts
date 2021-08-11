import { Module } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { ListenerService2 } from './listener.service2';

@Module({
  providers: [ListenerService, ListenerService2]
})
export class ListenerModule {}
