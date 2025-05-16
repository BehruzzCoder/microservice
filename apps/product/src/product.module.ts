import { Module } from '@nestjs/common';

import { ProductsService } from './product.service';
import { ProductsController } from './product.controller';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModule {}
