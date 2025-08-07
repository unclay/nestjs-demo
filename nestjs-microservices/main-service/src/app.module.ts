import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MicroservicesModule } from './microservices/microservices.module';

@Module({
  imports: [MicroservicesModule],
  controllers: [AppController],
})
export class AppModule {}
