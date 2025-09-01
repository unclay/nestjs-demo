// logging.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from '../services/logger.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly reflector: Reflector,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    
    // 获取装饰器设置的 title
    const title = this.reflector.get<string>('routeTitle', context.getHandler());
    const user = request.user;
    // request log
    return next.handle().pipe(
      tap(() => {
        // response log
        this.loggerService.createLog({
          admin_id: user?.id,
          name: user?.name,
          url: request.originalUrl,
          title,
          data: request.query,
          ip: request.ip,
          ua: request.headers['user-agent'],
          method: request.method,
        });
      }),
    );
  }
}