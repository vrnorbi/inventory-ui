import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductHistoryService} from './product-history.service';
import {ProductHistory} from '../model/product-history';


@Injectable()
export class ProductResolver implements Resolve<Array<ProductHistory>> {

  constructor(private productHistoryService: ProductHistoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<ProductHistory>> {
    return this.productHistoryService.findProductHistoryByProduct('/producthistory/filter', route.params['id']);
  }

}
