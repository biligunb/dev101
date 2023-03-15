import { Body, Controller, Get, Post } from '@nestjs/common';
import { Topic } from './topic.interface';
import { TopicDto } from './topic.dto';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {
  private readonly topics: Topic[] = [];

  @Get()
  findAll(): Topic[] {
    return this.topics;
  }

  @Post()
  create(@Body() topicDto: TopicDto): Topic {
    const id = this.topics.length + 1;
    const topic: Topic = { id, ...topicDto };
    this.topics.push(topic);
    return topic;
  }
}
