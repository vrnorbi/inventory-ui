import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ProductWithHistory} from '../model/product-with-history';

@Injectable()
export class ProductHistoryService {

  constructor(private http: HttpClient) {
  }

  findProductHistoryByProduct(url: string, productId: string): Observable<ProductWithHistory> {
    let params = new HttpParams();
    params = params.set('productId', productId);
    return this.http.get<ProductWithHistory>(environment.baseUrl + url, {params : params});
  }
}
