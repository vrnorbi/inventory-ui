import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {ProductsPage} from '../model/products.page';
import {ManufacturersPage} from "../model/manufacturers.page";


@Injectable()
export class ManufacturersService {

    constructor(private http: HttpClient) {}

    findManufacturers(offset, limit):  Observable<ManufacturersPage> {
      let params = new HttpParams();
      params = params.set('page', offset);
      params = params.set('size', limit);
      return this.http.get<ManufacturersPage>('http://localhost:8080/manufacturers/filter/', {params : params});
    }

}
