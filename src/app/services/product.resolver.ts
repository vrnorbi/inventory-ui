import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {ProductsService} from "./products.service";


@Injectable()
export class ProductResolver implements Resolve<Product> {

    constructor(private productsService: ProductsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        return this.productsService.findProductById(route.params['id']);
    }

}

