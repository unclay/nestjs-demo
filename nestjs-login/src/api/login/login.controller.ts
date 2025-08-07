import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';
import { LoginService } from './login.service';

@Controller('api/login')
export class LoginController {
    constructor(private loginService: LoginService) { }
    @UseGuards(AuthGuard('local'))
    @Post()
    login(@Request() req) {
        // 登录成功后，生成 token
        // 前端需要将 token 存储到本地，后续请求需要在请求头中携带 token
        const token = this.loginService.sign(req.user);
        return {
            ...req.user,
            ...token,
        };
    }

    // 测试用，获取登录后的用户信息
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getLogin(@Request() req) {
        return {
            msg: '登录成功',
            ...req.user,
        };
    }

    // 测试用，生成密码
    @Get('password')
    getPassword() {
        return bcrypt.hash('Aa123456', 12);
    }
}
