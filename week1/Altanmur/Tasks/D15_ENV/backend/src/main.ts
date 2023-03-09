import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.API_PORT || 9000);
}
main();