import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 'S' | 'M'| 'L' | 'XL';

// Esta es una de las características principales de las
// interfaces, la herencia, por medio de la palabra clave
// extends
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
