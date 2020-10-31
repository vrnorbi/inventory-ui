import {Category} from './category';
import {Manufacturer} from './manufacturer';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  manufacturer: Manufacturer;
}
