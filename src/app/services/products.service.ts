import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../model/page';
import {Product} from "../model/product";


@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  findProductById(id) {
    let params = new HttpParams();
    params = params.set('id', id);
    return this.http.get<Product>('http://localhost:8080/products/id/', {params: params});
  }

  findProducts(name, category, priceFrom,
               priceTo,
               supplier,
               manufacturer, sortBy, sortDirection, offset, limit): Observable<Page> {
    let params = new HttpParams();
    params = params.set('name', name);
    params = params.set('category', category);
    if (priceFrom != '') {
      params = params.set('fromPrice', priceFrom);
    }
    if (priceTo != '') {
      params = params.set('toPrice', priceTo);
    }
    params = params.set('supplier', supplier);
    params = params.set('manufacturer', manufacturer);
    params = params.set('sortBy', sortBy);
    params = params.set('sortDirection', sortDirection);
    params = params.set('page', offset);
    params = params.set('size', limit);
    return this.http.get<Page>('http://localhost:8080/products/filter/', {params: params});
  }

}
