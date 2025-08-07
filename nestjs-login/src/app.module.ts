import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GlobalAuthGuard } from './auth/global-auth.guard';
import { LoginModuleV1 } from './api/v1/login/login.module';
import { UserModuleV1 } from './api/v1/user/user.module';
import { LoginModuleV2 } from './api/v2/login/login.module';
import { UserModuleV2 } from './api/v2/user/user.module';

@Module({
  imports: [LoginModuleV1, LoginModuleV2, UserModuleV1, UserModuleV2, AuthModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: GlobalAuthGuard,
  }],
  exports: [AuthModule],
})
export class AppModule {}
