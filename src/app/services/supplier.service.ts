import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SupplierService {

    constructor(private http: HttpClient) {}

}
