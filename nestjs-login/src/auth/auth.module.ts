import { Global, Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { GlobalAuthGuard } from './global-auth.guard';
import { AuthService } from './auth.service';
import { AuthLocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: '生成一个自己的密钥', // 这是加密的密钥，要和解密的密钥一致（解密在jwt.strategy.ts）
      signOptions: { expiresIn: '6000s' },
    })
  ],
  providers: [JwtStrategy, AuthLocalStrategy, GlobalAuthGuard, AuthService],
  exports: [GlobalAuthGuard, AuthLocalStrategy]
})
export class AuthModule {}
