import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductWithHistory} from '../model/product-with-history';
import {HttpService} from './http.service';


@Injectable()
export class ProductResolver implements Resolve<ProductWithHistory> {

  constructor(private httpService: HttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductWithHistory> {
    return this.httpService.find<ProductWithHistory>(
      '/product-history/filter',
      {productId: route.params['id']}
      );
  }

}
