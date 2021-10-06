import {
  CallHandler,
  Injectable,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // controller 전 부분
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data))); // controller 다음 부분(컨트롤러에서 return한 것을 인터셉트)
  }
}
