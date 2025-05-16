import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';

@Module({
  controllers: [ProductsService],
})
class ProductsModule { }

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, {
    transport: Transport.TCP,
    options: { port: 4002, host: '127.0.0.1', },
  });
  await app.listen();
}
bootstrap();
