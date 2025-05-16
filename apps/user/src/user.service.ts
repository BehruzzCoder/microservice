import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, MessagePattern, Transport } from '@nestjs/microservices';

@Injectable()
export class UsersClientService {
  @MessagePattern('users')
  getUsers() {
   return [
      { id: 1, name: 'User1' },
      { id: 2, name: 'User2' },
      { id: 3, name: 'User3' },
    ];
  }
}
