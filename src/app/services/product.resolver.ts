import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductHistoryService} from './product-history.service';
import {ProductWithHistory} from '../model/product-with-history';


@Injectable()
export class ProductResolver implements Resolve<ProductWithHistory> {

  constructor(private productHistoryService: ProductHistoryService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductWithHistory> {
    return this.productHistoryService.findProductHistoryByProduct('/producthistory/filter', route.params['id']);
  }

}
