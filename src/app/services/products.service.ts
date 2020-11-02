import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Page} from '../model/page';
import {environment} from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  deleteProductById(id) {
    return this.http.delete(environment.baseUrl + '/products/delete/' + id);
  }

  saveProduct(product: Product) {
    return this.http.post<Product>(environment.baseUrl + '/products/new', product, {});
  }

  findProducts(name, category, priceFrom,
               priceTo,
               supplier,
               manufacturer, sortBy, sortDirection, offset, limit): Observable<Page<Product>> {
    let params = new HttpParams();
    params = params.set('name', name);
    params = params.set('category', category);
    if (priceFrom !== '') {
      params = params.set('fromPrice', priceFrom);
    }
    if (priceTo !== '') {
      params = params.set('toPrice', priceTo);
    }
    params = params.set('supplier', supplier);
    params = params.set('manufacturer', manufacturer);
    params = params.set('sortBy', sortBy);
    params = params.set('sortDirection', sortDirection);
    params = params.set('page', offset);
    params = params.set('size', limit);
    return this.http.get<Page<Product>>(environment.baseUrl + '/products/filter/', {params: params});
  }

}
