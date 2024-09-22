import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from '@common/exception';
import { AppModule } from '@root/app.module';
import { swaggerConfiguration } from '@common/documentation';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter()); // middleware pour filtrer nos exceptions

  swaggerConfiguration.config(app);

  await app.listen(3000);
}
bootstrap();
