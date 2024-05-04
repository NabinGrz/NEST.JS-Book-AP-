import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  findAllBooksService(): Book[] {
    return this.books;
  }
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book successfully added';
  }
  updateBookService(book: Book): string {
    const index = this.books.findIndex((current) => {
      return current.id == book.id;
    });
    this.books[index] = book;
    return 'Book successfully updated';
  }
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((current) => {
      return bookId != current.id;
    });
    return 'Book successfully deleted';
  }
}
