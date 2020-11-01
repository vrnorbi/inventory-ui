import {Product} from './product';

export abstract class Constants {

  static readonly EMPTY_PRODUCT: Product = {
    'id' : null,
    'name': '',
    'price': 0,
    'brand': {
      'id' : null,
      'name': ''
    },
    'category': {
      'id' : null,
      'name': ''
    },
    'manufacturer': {
      'id' : null,
      'name': '',
      'country': '',
      'url': '',
      'rating': 0
    },
    'supplier': {
      'id' : null,
      'name': ''
    }
  };

}
