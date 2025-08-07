import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/login')
export class LoginController {
    @Post()
    login() {
        return 'login';
    }
    @Get()
    getLogin() {
        return 'getLogin';
    }
}
