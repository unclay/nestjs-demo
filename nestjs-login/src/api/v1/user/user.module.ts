import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { JwtStrategy } from '../login/jwt.strategy';

@Module({
  controllers: [UserController],
  providers: [JwtStrategy]
})
export class UserModuleV1 {}
