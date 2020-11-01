import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../model/page';
import {Category} from '../model/category';


@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {}

    findCategory(offset, limit):  Observable<Page<Category>> {
      let params = new HttpParams();
      params = params.set('page', offset);
      params = params.set('size', limit);
      return this.http.get<Page<Category>>('http://localhost:8080/categories/filter/', {params : params});
    }

}
