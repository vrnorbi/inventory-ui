import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../model/brand';


@Injectable()
export class BrandService {

    constructor(private http: HttpClient) {}

  findAllBrands():  Observable<Array<Brand>> {
    return this.http.get<Array<Brand>>('http://localhost:8080/brands/all');
  }

}
