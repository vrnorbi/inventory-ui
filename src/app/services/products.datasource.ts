import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {Product} from '../model/product';
import {ProductsService} from './products.service';
import {Page} from '../model/page';


export class ProductsDataSource implements DataSource<Product> {

  private productsSubject = new BehaviorSubject<Product[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  public dataLength$;

  constructor(private productsService: ProductsService) {
  }

  loadProducts(name: string = '',
               category: string = '',
               priceFrom: string = '',
               priceTo: string = '',
               supplier: string = '',
               manufacturer: string = '',
               sortBy: string = 'name',
               sortDirection: string = 'asc',
               pageIndex: number = 0,
               pageSize: number = 5) {

    this.loadingSubject.next(true);

    this.productsService.findProducts(name, category, priceFrom,
      priceTo,
      supplier,
      manufacturer, sortBy, sortDirection, pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((page: Page<Product>) => {
      console.log(page);
      this.dataLength$ = page.totalElements;
      this.productsSubject.next(page.content);
    });

  }

  connect(collectionViewer: CollectionViewer): Observable<Product[]> {
    console.log('Connecting data source');
    return this.productsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.productsSubject.complete();
    this.loadingSubject.complete();
  }

}

