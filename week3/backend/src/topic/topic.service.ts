// src/topics/topic.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TopicEntity } from './topic.entity';
import { Topic } from './topic.interface';
import { TopicDto } from './topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(TopicEntity)
    private readonly topicRepository: Repository<TopicEntity>,
  ) {}

  async create(topicDto: TopicDto): Promise<Topic> {
    const { title, choices, status } = topicDto;
    const topic = new TopicEntity();
    topic.title = title;
    topic.choices = choices;
    topic.status = status;
    await this.topicRepository.save(topic);
    return topic;
  }

  async findAll(): Promise<Topic[]> {
    const topics = await this.topicRepository.find();
    return topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
      choices: topic.choices,
      status: topic.status,
    }));
  }
}
