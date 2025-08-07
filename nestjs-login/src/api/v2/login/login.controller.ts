import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { Public } from '../../../auth/auth.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v2/login')
export class LoginControllerV2 {
    @Public() // 不需要登录校验
    @UseGuards(AuthGuard('auth-local')) // auth本地策略：账号密码登录
    @Post()
    login(@Request() req) {
        return {
            msg: 'v2/login',
            ...req.user,
        };
    }
}
