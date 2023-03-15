import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  imports: [TopicsModule],
})
export class AppModule {}
