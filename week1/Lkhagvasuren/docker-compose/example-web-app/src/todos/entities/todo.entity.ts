import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  title: string;
}
