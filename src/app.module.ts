import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListenerModule } from './modules/listener/listener.module';
import { EmitterModule } from './modules/emitter/emitter.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { DB } from './env';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ListenerModule, EmitterModule, EventEmitterModule.forRoot(),
    MongooseModule.forRoot(`${DB.mongo.connect}/${DB.mongo.name}`, DB.mongo.options),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
