import {Product} from './product';

export class Constants {

  // TODO why variable does not work
  static emptyProduct(): Product {
    return {
      'id' : null,
      'name': '',
      'price': 0,
      'quantity': 0,
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
        'name': '',
        'iban': '',
        'url': '',
        'rating': 0
      }
    };
  }

}
