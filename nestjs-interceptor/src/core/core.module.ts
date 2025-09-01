// logger.module.ts
import { Global, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerService } from './services';
import { LoggerInterceptor } from './interceptors';

@Global()
@Module({
    providers: [ LoggerService, {
        provide: APP_INTERCEPTOR,
        useClass: LoggerInterceptor
    }],
    exports: [ LoggerService ],
})
export class CoreModule {}
