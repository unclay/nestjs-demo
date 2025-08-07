import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { Product } from './product.interface';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'get_all_products' })
  getAllProducts(): Product[] {
    return this.productService.findAll();
  }

  @MessagePattern({ cmd: 'get_product_by_id' })
  getProductById(id: number): Product {
    return this.productService.findOne(id);
  }

  @MessagePattern({ cmd: 'create_product' })
  createProduct(product: Omit<Product, 'id'>): Product {
    return this.productService.create(product);
  }
}