import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  apiLogger,
  globalMiddleWareOne,
  globalMiddleWareTwo,
} from 'src/middlewares/globalMiddleWares';
import { BookGuard } from './book/book.guard';
import { AppInterceptor } from './interceptors/app.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new BookGuard());
  // app.useGlobalInterceptors(new AppInterceptor());
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  app.use(apiLogger);
  await app.listen(3000);
}
bootstrap();
