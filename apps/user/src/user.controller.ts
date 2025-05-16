import { Controller, Get } from '@nestjs/common';
import { UsersClientService } from './user.service';
import { lastValueFrom } from 'rxjs';

@Controller()
export class UserController {
  constructor(private readonly usersService: UsersClientService) {}

  @Get()
  async getHello(): Promise<{ id: number; username: string }[]> {
    const usersObservable = this.usersService.getUsers();
    const users = await lastValueFrom(await usersObservable) as { id: number; username: string }[];
    return users;
  }
}
