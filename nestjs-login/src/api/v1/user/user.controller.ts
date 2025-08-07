import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/user')
export class UserController {
    // 一行代码直接获取鉴权后的用户信息
    @UseGuards(AuthGuard('v1-jwt'))
    @Get()
    getUser(@Request() req) {
        return {
            msg: 'get user',
            ...req.user
        };
    }
}
