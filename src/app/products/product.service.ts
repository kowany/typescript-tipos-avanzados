import faker from "@faker-js/faker";
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto";
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex( product => product.id === id);
  if ( index === -1 ) {
    throw new Error(`Product #${id} not found`);
  }
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  };
  return products[index];
}

export const removeProduct = (id: string, changes: Product) => {
  const index = products.findIndex( product => product.id === id);
  if ( index === -1 ) {
    throw new Error(`Product #${id} not found`);
  }
  return products.splice(index, 1);
}

export const getProducts = () => {
  return products;
}

export const getProduct = (id:string): Product | null {
  const product = products.find(product => product.id === id);
  if ( !product ) {
    throw new Error(`Product #${id} not found`);
  }
  return product;
}

export const findProduct = (dto: FindProductDto): Product[] => {
  // code
  return products;
}
