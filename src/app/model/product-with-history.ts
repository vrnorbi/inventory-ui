import {ProductLight} from './product-light';
import {ProductHistory} from './product-history';

export interface ProductWithHistory {
  product: ProductLight;
  productHistories: Array<ProductHistory>;
}
