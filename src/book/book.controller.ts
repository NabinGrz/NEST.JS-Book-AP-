import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  ParseUUIDPipe,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
  Req,
  Res,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';
import { BookPipe } from 'src/custompipe/book.pipe';
import { BookGuard } from './book.guard';
import { AppInterceptor } from 'src/interceptors/app.interceptor';
import { Request, Response } from 'express';

@Controller('book')
// @UseGuards(new BookGuard())
// @UseInterceptors(new AppInterceptor())
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/test')
  // @UseGuards(new BookGuard())
  testInterceptor(): any {
    // return res.json({
    //   body: req.body,
    // });
    return 'heyyyy';
  }
  @Get('/findAll')
  // @UseGuards(new BookGuard())
  findAllBooksService(): Book[] {
    return this.bookService.findAllBooksService();
  }
  // @Post('/create')
  // addBookService(@Body(new BookPipe()) book: Book): string {
  //   if (book.title != '' && book.author != '' && book.published != '') {
  //     return this.bookService.addBookService(book);
  //   } else {
  //     return 'All Field required ';
  //   }
  // }

  @Post('/create')
  addBookService(@Body(new ValidationPipe()) book: Book): string {
    if (book.title != '' && book.author != '' && book.published != '') {
      return this.bookService.addBookService(book);
    } else {
      return 'All Field required ';
    }
  }

  @Put('/update')
  updateBookService(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBookService(@Param('id', ParseUUIDPipe) bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }
}
