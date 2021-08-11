import { Controller, Get } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('emitter')
export class EmitterController {
  constructor(
    private readonly event: EventEmitter2
  ) {
  }

  @Get()
  callEvent(){
    this.event.emit("test.created", "hello World");
  }
}
