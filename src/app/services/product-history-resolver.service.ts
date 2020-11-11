import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {ProductHistory} from '../model/product-history';


@Injectable()
export class ProductHistoryResolver implements Resolve<Array<ProductHistory>> {

  constructor(private httpService: HttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<ProductHistory>> {
    return this.httpService.find<Array<ProductHistory>>(
      '/product-history/filter',
      {productId: route.params['id']}
      );
  }

}
