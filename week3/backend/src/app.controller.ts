import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt'
import { BadRequestException } from '@nestjs/common/exceptions';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Post('register')
  async register(
    @Body('name') name:string,
    @Body('email') email:string,
    @Body('password') password: string
  ){
    const hashedPassword = await bcrypt.hash(password,12)

    return this.appService.create({
      name,
      email,
      password: hashedPassword
    })
  }

  
  @Post('login')
  async login(
      @Body('email') email: string,
      @Body('password') password: string,
  ){
    const user = await this.appService.findOne({email});
    console.log(user);
    if(!user){
      throw new BadRequestException('Invalid credantials');
    }
    if(await bcrypt.compare(password, user.password)){
      throw new BadRequestException('Invalid credantials');
    }

    return user;

  }
}
