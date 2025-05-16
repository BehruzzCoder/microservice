import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsService {
  @MessagePattern('products') 
  getProducts() {
    return [
      { id: 1, name: 'iPhone', price: 1000 },
      { id: 2, name: 'MacBook', price: 2000 },
    ];
  }
}
