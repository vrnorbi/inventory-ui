import {Category} from './category';
import {Manufacturer} from './manufacturer';
import {Brand} from './brand';
import {Supplier} from './supplier';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  manufacturer: Manufacturer;
  brand: Brand;
  supplier: Supplier;
}
