import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true})
  description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
