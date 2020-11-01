import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {Category} from '../model/category';
import {Page} from '../model/page';
import {HttpService} from './http.service';


export class PagingTableDatasource<T> implements DataSource<T> {

  private categorySubject = new BehaviorSubject<T[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  public dataLength$;
  private url: String;

  constructor(url, private httpService: HttpService) {
    this.url = url;
  }

  loadCategory(pageIndex: number, pageSize: number) {

    this.loadingSubject.next(true);

    this.httpService.findPage<T>(this.url, pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((page: Page<T>) => {
      console.log(page);
      this.dataLength$ = page.totalElements;
      this.categorySubject.next(page.content);
    });

  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    console.log('Connecting data source');
    return this.categorySubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.categorySubject.complete();
    this.loadingSubject.complete();
  }

}

