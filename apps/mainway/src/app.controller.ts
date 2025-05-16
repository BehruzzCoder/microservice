import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(@Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy) { }

  @ApiTags('Products 🛍️')
  @Get('/product')
  async getProducts() {
    return await this.productClient.send('products', {});
  }

  @ApiTags('Users 👤')
  @Get('/users')
  async getUsers() {
    return await this.userClient.send('users', {});
  }
}
