import { Injectable } from '@nestjs/common';
import { Listener } from './listener.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ListenerService2 {
  constructor(@InjectModel(Listener.name) protected readonly model) {
  }
}
