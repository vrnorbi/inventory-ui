import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Page} from '../model/page';


@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) {}

    findProducts(offset, limit):  Observable<Page> {
      // let params = new HttpParams();
      // params = params.set('offset', offset);
      // params = params.set('limit', limit);
      // console.log('http://localhost:8080/products/paging' + params.toString());
      console.log('http://localhost:8080/products/paging/' + offset + '/' + limit);
      return this.http.get<Page>('http://localhost:8080/products/paging/' + offset + '/' + limit);
    }

}
