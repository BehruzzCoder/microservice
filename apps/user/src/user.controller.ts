import { Controller, Get } from '@nestjs/common';
import { UsersClientService } from './user.service';
import { lastValueFrom } from 'rxjs';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly usersService: UsersClientService) { }

  @MessagePattern('users')
   getHello() {
    return  this.usersService.getUsers();
  }
}
