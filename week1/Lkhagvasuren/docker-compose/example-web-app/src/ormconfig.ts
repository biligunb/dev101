import { ConnectionOptions } from 'typeorm';
import { join } from 'path';
import { Todo } from './todos/entities/todo.entity';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'PWD4toor',
  database: 'test',
  entities: [Todo],
  synchronize: false,
  dropSchema: false,
  migrationsRun: false,
  logging: ['warn', 'error'],
  logger: 'debug',
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = connectionOptions;
