import { Controller, Get } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Client({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4001,
    },
  })
  private readonly productClient: ClientProxy;

  @Client({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4002,
    },
  })
  private readonly userClient: ClientProxy;

  @ApiTags('Products 🛍️')
  @Get('/products')
  async getProducts() {
    return this.productClient.send({ cmd: 'get_products' }, {});
  }

  @ApiTags('Users 👤')
  @Get('/users')
  async getUsers() {
    return this.userClient.send({ cmd: 'get_users' }, {});
  }
}
