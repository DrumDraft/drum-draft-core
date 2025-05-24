import { ApiSuccess } from '@/auth/types/responses';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiSuccess<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiSuccess<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
      })),
    );
  }
}
