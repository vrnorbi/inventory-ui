import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../model/page';
import {environment} from '../../environments/environment';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  find<T>(url: String, params: any = {}): Observable<T> {
    return this.http.get<T>(environment.baseUrl + url, { params : params });
  }

  findAll<T>(url: String, params: any = {}): Observable<Array<T>> {
    return this.http.get<Array<T>>(environment.baseUrl + url, { params : params });
  }

  findPage<T>(url, offset, limit, searchFilter):  Observable<Page<T>> {
    let params = new HttpParams();
    params = params.set('page', offset);
    params = params.set('size', limit);
    params = params.set('name', searchFilter);
    return this.http.get<Page<T>>(environment.baseUrl + url, {params : params});
  }

}
