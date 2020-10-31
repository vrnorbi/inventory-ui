import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryPage} from '../model/category.page';


@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {}

    findCategory(offset, limit):  Observable<CategoryPage> {
      let params = new HttpParams();
      params = params.set('page', offset);
      params = params.set('size', limit);
      return this.http.get<CategoryPage>('http://localhost:8080/categories/filter/', {params : params});
    }

}
