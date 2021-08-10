import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Api Documentation')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app,options);
    SwaggerModule.setup('api/v1/docs',app,document);
   
  await app.listen(3000);
}
bootstrap();
