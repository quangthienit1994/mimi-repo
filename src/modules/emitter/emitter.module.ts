import { Module } from '@nestjs/common';
import { EmitterController } from './emitter.controller';

@Module({
  providers: [],
  controllers: [EmitterController]
})
export class EmitterModule {}
