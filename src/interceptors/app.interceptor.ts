import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('THIS IS APP INTERCEPTOR');
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.name = 'THIS IS INTERCEPTING A NAME';
    return next.handle().pipe(
      map((data) => {
        data = 'response from data';
        return data;
      }),
    );
  }
}
