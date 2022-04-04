// Al momento de declarar un parámetro opcional (?), estos
// deben de colocarse al final de las declaraciones

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
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

const product1 = createProduct(1, true, 45);
console.log(product1);
const product2 = createProduct(1);
console.log(product2);
const product3 = createProduct(1, false, 0);
console.log(product3);
