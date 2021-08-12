import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Listener {
  @Prop({ type: String })
  name: string;
}

export type ListenerDocument = Listener & Document;
export const ListenerSchema = SchemaFactory.createForClass(Listener);
