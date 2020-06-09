import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosModule } from './todos.module';

describe('Todos Controller', () => {
  let controller: TodosController;
  let todosService = { findAll: () => ['Eat', 'Code', 'Sleep'] };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodosModule],
    })
    .overrideProvider(TodosService)
    .useValue(todosService)
    .compile();

    controller = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /todos', () => {
    it('should return an array', async () => {
      expect(await controller.findAll()).toBeInstanceOf(Array);
    });

    it('should return a list of todos', async () => {
      expect(await controller.findAll()).toEqual(['Eat', 'Code', 'Sleep']);
    });
  });
});
