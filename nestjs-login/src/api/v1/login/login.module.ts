import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { JwtStrategy } from './jwt.strategy';
import { LoginService } from './login.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: '生成一个自己的密钥', // 这是加密的密钥，要和解密的密钥一致（解密在jwt.strategy.ts）
    signOptions: { expiresIn: '6000s' },
  })],
  controllers: [LoginController],
  providers: [JwtStrategy, LocalStrategy, LoginService],
})
export class LoginModuleV1 {}
