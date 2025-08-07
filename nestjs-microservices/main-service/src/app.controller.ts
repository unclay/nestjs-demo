import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('LOG_SERVICE') private readonly logClient: ClientProxy,
  ) {}

  @Get('users')
  async getAllUsers() {
    const users = await firstValueFrom(this.userClient.send({ cmd: 'get_all_users' }, {}));
    this.logClient.emit('log', { message: 'Get all users', users });
    return users;
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string) {
    const user = await firstValueFrom(this.userClient.send({ cmd: 'get_user_by_id' }, parseInt(id)));
    return user;
  }

  @Post('users')
  async createUser(@Body() user: any) {
    const newUser = await firstValueFrom(this.userClient.send({ cmd: 'create_user' }, user));
    if (newUser) {
      this.logClient.emit('log', { message: 'User created', user });
    } else {
      this.logClient.emit('log-error', { message: 'User creation failed', user });
    }
    return newUser;
  }

  @Get('products')
  async getAllProducts() {
    const products = await firstValueFrom(this.productClient.send({ cmd: 'get_all_products' }, {}));
    return products;
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: string) {
    const product = await firstValueFrom(this.productClient.send({ cmd: 'get_product_by_id' }, parseInt(id)));
    return product;
  }

  @Post('products')
  async createProduct(@Body() product: any) {
    const newProduct = await firstValueFrom(this.productClient.send({ cmd: 'create_product' }, product));
    return newProduct;
  }

  @Get()
  async getHome() {
    return 'hello world';
  }
}
