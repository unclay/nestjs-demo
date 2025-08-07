import { Injectable } from '@nestjs/common';
import { adminInfo } from 'src/mock/admin.mock';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }
    // findUser 模拟数据库查询数据
    async findUser(username: string) {
        if (username !== 'admin') return null;
        return Object.assign({}, adminInfo);
    }
    // 校验用户，并返回用户信息
    async validateUser(username: string, password: string) {
        const user: any = await this.findUser(username);
        if (!user) return null;
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;
        delete user.password;
        return user;
    }
    // 生成 token
    sign(user: any) {
        // 签名字段只要几个关键字段，太多字段会导致token长度过长，浪费网络资源
        // 这里只用了uid、username
        const payload = { id: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
