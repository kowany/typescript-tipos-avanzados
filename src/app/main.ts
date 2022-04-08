import faker from '@faker-js/faker';

import { addProduct, findProduct, products, updateProduct } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid()
  });
}

console.log('Products: ', products );
const product = products[0];

updateProduct(product.id, {
  title: 'New title',
  stock: 80,
  size: 'L'
});

findProduct({
  stock: 10,
  color: 'red'
})
