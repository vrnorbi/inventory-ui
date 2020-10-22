import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../products/product';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/products/all';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.usersUrl);
  }

}
