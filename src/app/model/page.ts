import {Product} from './product';

export interface Page {
  content: Array<Product>;
  totalElements: number;
}
