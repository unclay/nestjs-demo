import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './api/login/login.module';
import { HomeModule } from './api/home/home.module';

@Module({
  imports: [LoginModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
