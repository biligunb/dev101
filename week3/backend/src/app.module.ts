import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: '172.19.0.2',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'pwd',
      database: 'vote_db',
      autoLoadEntities: true,
      synchronize: true,
      entities: [UsersModule],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
