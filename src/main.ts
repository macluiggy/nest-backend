import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExeptionsFilter } from './common/filters/http exception.filter';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // use validation pipe globally
  app.useGlobalFilters(new AllExeptionsFilter()); // use exception filter globally
  app.useGlobalInterceptors(new TimeoutInterceptor()); // use interceptor globally
  await app.listen(3000);
}
bootstrap();
