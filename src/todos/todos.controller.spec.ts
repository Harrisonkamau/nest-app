import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

describe('Todos Controller', () => {
  let controller: TodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    controller = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /todos', () => {
    it('should return an array', () => {
      expect(controller.allTodos()).toBeInstanceOf(Array);
    });

    it('should return a list of todos', () => {
      const todos = ['Eat', 'Code', 'Sleep', 'Repeat'];
      expect(controller.allTodos()).toEqual(todos);
    });
  });
});
