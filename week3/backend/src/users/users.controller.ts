import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  me(@Req() request) {
    const userId = request.user.userId;
    return this.usersService.findOne(userId)
  }
  @Post('register')
  async register(
    @Body('name') name:string,
    @Body('email') email:string,
    @Body('password') password: string
  ){
    const hashedPassword = await bcrypt.hash(password,12)

    return this.usersService.create({
      name,
      email,
      password: hashedPassword
    })
  }

}
