import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, description: 'High performance laptop' },
    { id: 2, name: 'Smartphone', price: 599.99, description: 'Latest smartphone model' },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct = {
      id: this.products.length + 1,
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}