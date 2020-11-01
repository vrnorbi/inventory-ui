import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Manufacturer} from '../model/manufacturer';
import {Page} from '../model/page';


@Injectable()
export class ManufacturersService {

    constructor(private http: HttpClient) {}

    findManufacturers(offset, limit):  Observable<Page<Manufacturer>> {
      let params = new HttpParams();
      params = params.set('page', offset);
      params = params.set('size', limit);
      return this.http.get<Page<Manufacturer>>('http://localhost:8080/manufacturers/filter/', {params : params});
    }

}
