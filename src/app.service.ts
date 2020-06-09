import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTodos(): string {
    return 'Hello World!';
  }
}
