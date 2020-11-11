import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {Product} from '../model/product';


@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(private httpService: HttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.httpService.find<Product>(
      '/products/id',
      {id: route.params['id']}
      );
  }

}
