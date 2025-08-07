import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalAuthGuard } from './auth/global-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new GlobalAuthGuard(app.get(Reflector)));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
