import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookMiddleWare } from './middlewares/book.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleWare).forRoutes('book');
  }
}
