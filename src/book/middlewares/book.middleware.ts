import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class BookMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.protocol;
    console.log('This is class based middleware for book module');
    next();
  }
}
