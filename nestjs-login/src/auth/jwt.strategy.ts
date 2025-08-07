import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { adminInfo } from "src/mock/admin.mock";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'auth-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '生成一个自己的密钥', // 这是解密的密钥，要和加密的密钥一致（加密在login.module.ts）
    });
  }

  async validate(payload: any) {
    // 模拟配对数据库
    if (adminInfo.id === payload.id) {
      return {
        strategy: 'auth-jwt',
        ...adminInfo,
        password: undefined, // del password
      };
    }
    return null;
  }
}