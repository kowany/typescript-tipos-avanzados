import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}
export const updateProduct = (id: string, changes: Product) => {
  const index = products.findIndex( product => product.id === id);
  if ( index === -1 ) {
    throw new Error(`Product #${id} not found`);
  }
  const product = products[index];
  products[index] = {
    ...product,
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


