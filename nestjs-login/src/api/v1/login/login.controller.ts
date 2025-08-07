import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';
import { Public } from 'src/auth/auth.decorator';

@Public(false)
@Controller('api/v1/login')
export class LoginController {
    constructor() { }
    @UseGuards(AuthGuard('v1-local'))
    @Post()
    login(@Request() req) {
        return req.user;
    }

    // 测试用，生成密码
    @Get('password')
    getPassword() {
        return bcrypt.hash('Aa123456', 12);
    }
}
