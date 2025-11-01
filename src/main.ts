import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { ResponseInterceptor } from '@/libs/interceptors/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Thiết lập global prefix (ví dụ: http://localhost:3000/api/...)
  app.setGlobalPrefix('api');

  // Parse cookie từ request
  app.use(cookieParser());

  // CORS: Cho phép frontend truy cập + gửi cookie
  app.enableCors({
    origin: process.env.CLIENT_URL || 'http://localhost:3001',
    credentials: true,
  });

  // Global validation: DTO class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Đăng ký Interceptor toàn cục
  const coreHandler = new ResponseInterceptor();
  app.useGlobalInterceptors(coreHandler);
  app.useGlobalFilters(coreHandler);

  // --------------------------
  // Swagger configuration
  // --------------------------
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Swagger UI cho dự án NestJS')
    .setVersion('1.0')
    .addBearerAuth() // nếu dùng JWT thì bật lên
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: { persistAuthorization: true }, // giữ lại token khi reload
  });

  const PORT = process.env.PORT || 3333;
  await app.listen(PORT);

  console.clear();
  console.log(`🚀 Backend running at: http://localhost:${PORT}/api`);
  console.log(`📖 Swagger docs available at: http://localhost:${PORT}/api-docs`);
  console.log(`🌐 Frontend CORS allowed from: ${process.env.CLIENT_URL}`);
}
bootstrap();
