import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { adminInfo } from "src/mock/admin.mock";

/**
 * jwt 策略
 * 1. 从请求头中提取 jwt  token
 * 2. 验证 token 有效性
 * 3. 解密 token 中的信息
 * 4. 验证解密后的信息是否正确
 * 5. 如果正确，将解密后的信息挂载到请求对象上
 * headers: {
 *     Authorization: 'Bearer [token]'
 * }
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
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
                ...adminInfo,
                password: undefined, // del password
            };
        }
        return null;
    }
}
