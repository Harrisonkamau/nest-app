import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

const dbOptions = {
  useNewUrlParser: true,
};


@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot('mongodb://localhost/nest_app', dbOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
