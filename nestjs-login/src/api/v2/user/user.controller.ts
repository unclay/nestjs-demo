import { Controller, Get, Request } from '@nestjs/common';
import { Public } from 'src/auth/auth.decorator';

@Controller('api/v2/user')
export class UserController {
    @Get()
    getUser(@Request() req) {
        return {
            msg: 'get user',
            ...req.user
        };
    }
}
