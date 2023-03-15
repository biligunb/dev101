// src/topics/topics.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicEntity } from './topic.entity';
import { TopicsController } from './topics.controller';
import { TopicService } from './topic.service';

@Module({
  imports: [TypeOrmModule.forFeature([TopicEntity])],
  controllers: [TopicsController],
  providers: [TopicService],
})
export class TopicsModule {}
