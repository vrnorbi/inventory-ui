import {Product} from './product';

export interface ProductsPage {
  content: Array<Product>;
  totalElements: number;
}
