import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../model/page';


@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) {}

    findProducts(offset, limit):  Observable<Page> {
      let params = new HttpParams();
      params = params.set('page', offset);
      params = params.set('size', limit);
      return this.http.get<Page>('http://localhost:8080/products/filter/', {params : params});
    }

}
