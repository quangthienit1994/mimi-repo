import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ListenerService2 } from './listener.service2';

@Injectable()
export class ListenerService {

  constructor(
    private service2: ListenerService2
  ) {
  }

  @OnEvent("test.created")
  async onCreated(payload){
    await console.log("fire worked", payload);
  }
}
