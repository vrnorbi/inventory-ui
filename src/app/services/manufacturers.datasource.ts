import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {Manufacturer} from '../model/manufacturer';
import {ManufacturersService} from './manufacturers.service';
import {Page} from '../model/page';


export class ManufacturersDatasource implements DataSource<Manufacturer> {

  private manufacturersSubject = new BehaviorSubject<Manufacturer[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  public dataLength$;

  constructor(private manufacturersSevice: ManufacturersService) {
  }

  loadManufacturers(pageIndex: number, pageSize: number) {
    this.loadingSubject.next(true);
    this.manufacturersSevice.findManufacturers(pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((page: Page<Manufacturer>) => {
      console.log(page);
      this.dataLength$ = page.totalElements;
      this.manufacturersSubject.next(page.content);
    });

  }

  connect(collectionViewer: CollectionViewer): Observable<Manufacturer[]> {
    console.log('Connecting data source');
    return this.manufacturersSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.manufacturersSubject.complete();
    this.loadingSubject.complete();
  }

}

