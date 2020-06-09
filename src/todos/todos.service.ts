import { Injectable } from  '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from  'mongoose';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';


@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>){}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo>  {
    const newTodo = new this.todoModel(createTodoDto);
    return newTodo.save();
  }
}
