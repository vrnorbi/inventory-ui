import {ProductHistory} from './product-history';
import {Product} from './product';

export interface ProductWithHistory {
  product: Product;
  productHistories: Array<ProductHistory>;
}
