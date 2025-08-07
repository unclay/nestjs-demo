import { Module } from '@nestjs/common';
import { LoginControllerV2 } from './login.controller';

@Module({
  controllers: [LoginControllerV2],
})
export class LoginModuleV2 {}
