import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string
}

type example = Pick<Product, 'color' | 'description'>

// El tipo de utilidad Partial convierte todos
// los parámetros en opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Product>> {}

type example3 = Readonly<Product>;
