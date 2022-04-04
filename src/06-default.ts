// Al momento de declarar un parámetro opcional (?), estos
// deben de colocarse al final de las declaraciones

export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock: stock,
    isNew: isNew
  }
}

// 0 === false
// '' === false
// false === false
// Esto provocaría comportamiento extraños en nuestra
// aplicación, por lo que se recomienda el uso del opearador
// Nullish Coalescing(??), el cual solamente pondrá los
// valores de la derecha si los de la izquierda son undefined
// o null.

const product1 = createProduct(1, true, 12);
console.log(product1);
const product2 = createProduct(1);
console.log(product2);
const product3 = createProduct(1, false, 0);
console.log(product3);
const product4 = createProduct(1, true, 100);
console.log(product4);
const product5 = createProduct(5, false);
console.log(product5);
