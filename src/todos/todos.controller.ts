import { Controller, Get, Req } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  allTodos(): string[] {
    return this.todosService.getTodos();
  }
}
