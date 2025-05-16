import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersClientService } from './user.service';



@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersClientService],
})
export class UserModule {}
