// logging.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    
    this.logger.log(`Request: ${method} ${url}`);
    
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => {
          const responseTime = Date.now() - now;
          this.logger.log(`Response: ${method} ${url} - ${responseTime}ms`);
        }),
      );
  }
}