import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from "../model/page";
import {Category} from "../model/category";


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  findAll<T>(url: String): Observable<Array<T>> {
    return this.http.get<Array<T>>('http://localhost:8080' + url);
  }

  findPage<T>(url, offset, limit):  Observable<Page<T>> {
    let params = new HttpParams();
    params = params.set('page', offset);
    params = params.set('size', limit);
    return this.http.get<Page<T>>('http://localhost:8080/' + url, {params : params});
  }

}
