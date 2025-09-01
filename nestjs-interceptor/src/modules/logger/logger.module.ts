// logger.module.ts
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerService } from './logger.service';
import { LoggerInterceptor } from './logger.interceptor';

@Module({
  providers: [
    LoggerService,
    {
      provide: APP_INTERCEPTOR, // 自动注册为全局拦截器
      useClass: LoggerInterceptor,
    },
  ],
  exports: [LoggerService], // 导出服务以便其他模块使用
})
export class LoggerModule {}
