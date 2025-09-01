// logger.module.ts
import { Global, Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule]
})
export class ModulesModule {}
