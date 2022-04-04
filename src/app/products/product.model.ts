import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M'| 'L' | 'XL';

// Esta es una de las características principales de las
// interfaces, la herencia, por medio de la palabra clave
// extends
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: Category
}
