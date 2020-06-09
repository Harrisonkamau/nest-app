import { Module } from '@nestjs/common';
import { MongooseModule } from  '@nestjs/mongoose';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import {  Todo, TodoSchema } from './schemas/todo.schema';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeatureAsync(
      [
        { name: Todo.name, useFactory: () => {
          const schema = TodoSchema;
          schema.pre('save', () => console.log('Saving new todo to DB'))
          return schema;
        } },
      ],
    )
  ],
  controllers: [TodosController],
  providers: [TodosService],
})

export class TodosModule{}
