import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supplier} from '../model/supplier';


@Injectable()
export class SupplierService {

    constructor(private http: HttpClient) {}

  findAllSuppliers():  Observable<Array<Supplier>> {
    return this.http.get<Array<Supplier>>('http://localhost:8080/suppliers/all');
  }

}
