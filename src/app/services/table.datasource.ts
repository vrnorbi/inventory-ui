import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {HttpService} from './http.service';


export class TableDatasource<T> implements DataSource<T> {

  private dataSubject = new BehaviorSubject<T[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  public dataLength$;

  constructor(private httpService: HttpService) {}

  loadData(url: string, params = {}) {
    this.loadingSubject.next(true);
    this.httpService.findAll<T>(url, params).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((data: Array<T>) => {
      console.log(data);
      this.dataLength$ = data.length;
      this.dataSubject.next(data);
    });

  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    console.log('Connecting data source');
    return this.dataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }

}

