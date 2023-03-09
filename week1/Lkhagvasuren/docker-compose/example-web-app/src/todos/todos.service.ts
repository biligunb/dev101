import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private readonly todosRepository: Repository<Todo>) {}

  async create(createTodoDto: CreateTodoDto) {
    return this.todosRepository.save(createTodoDto);
  }

  findAll() {
    return this.todosRepository.find();
  }

  findOne(id: number) {
    return this.todosRepository.findOne(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todosRepository.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todosRepository.delete(id);
  }
}
