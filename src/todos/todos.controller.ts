import { Controller, Get, Body, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto)  {
    await this.todosService.create(createTodoDto);
  }
}
