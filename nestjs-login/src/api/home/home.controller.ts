import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/home')
export class HomeController {
    // 一行代码直接获取鉴权后的用户信息
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getHome(@Request() req) {
        return {
            msg: 'home',
            ...req.user
        };
    }
}
