import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'get_all_users' })
  getAllUsers(): User[] {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'get_user_by_id' })
  getUserById(id: number): User {
    return this.userService.findOne(id);
  }

  @MessagePattern({ cmd: 'create_user' })
  createUser(user: Omit<User, 'id'>): User {
    return this.userService.create(user);
  }
}