import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    type: String,
    description: 'Todo title',
    example: 'Just do it',
  })
  title: string;
}
