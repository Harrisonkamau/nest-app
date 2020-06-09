import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const dbOptions = {
  useNewUrlParser: true,
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest_app', dbOptions)
  ]
})

export class DatabaseModule {}
