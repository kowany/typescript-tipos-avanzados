type Sizes = 'S' | 'M'| 'L' | 'XL';
// Con type podemos definir tipos primitivos o directos
type userId = string | number;
// Una interface no se pueden definir en una solo línea,
// regularmente la ocupamos para un conjunto de atributos
// y valores. Una de las funcionalidades de interface es que
// se pueden extender

// type Product = {
//   id: string | number,
//   title: string,
//   createAt: Date,
//   stock: number,
//   size?: Sizes
// }

interface Product {
  id: string | number,
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createAt: new Date(),
  stock: 90
});

// Las interfases sirven exactamente igual que el tipo (type)

const addProduct = (data: Product) => {
  products.push(data);
}
