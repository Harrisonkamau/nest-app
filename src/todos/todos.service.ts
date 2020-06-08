import { Injectable } from  '@nestjs/common';

const sampleTodos = () => (['Eat', 'Code', 'Sleep', 'Repeat']);

@Injectable()
export class TodosService {
  getTodos(): string[] {
    return sampleTodos();
  }
}
