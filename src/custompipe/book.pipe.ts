import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Book } from 'src/book/data/book.dto';

export class BookPipe implements PipeTransform {
  async transform(value: Book, metadata: ArgumentMetadata): Promise<Book> {
    //***  CLASS TANSFORMER OBJECT CONVERT CLASS */
    const bookClass = plainToInstance(Book, value);
    const errors = await validate(bookClass);
    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation Failed' + JSON.stringify(errors),
      );
    }
    //  else if (!value.title || !value.author || !value.published)
    //   throw new BadRequestException('All fields are required');
    else {
      return value;
    }
  }
}
