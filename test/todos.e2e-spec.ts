import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TodosModule } from '../src/todos/todos.module';
import { AppModule } from '../src/app.module';
import { TodosService } from '../src/todos/todos.service';

describe('Todos', () => {
  let app: INestApplication;
  let todosService = { findAll: () => ['Eat', 'Code', 'Sleep'] };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TodosModule],
    })
      .overrideProvider(TodosService)
      .useValue(todosService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('GET /todos', () => {
    return request(app.getHttpServer())
      .get('/todos')
      .expect(200)
      .expect(todosService.findAll())
  });

  afterAll(async () => {
    await app.close();
  });
});
