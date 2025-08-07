import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // 启用CORS
  await app.listen(3000);
  console.log('Main service is running on port 3000');
}
bootstrap();
