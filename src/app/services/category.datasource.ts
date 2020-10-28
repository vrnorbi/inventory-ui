import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {Category} from "../model/category";
import {CategoryService} from "./category.service";
import {CategoryPage} from "../model/category.page";


export class CategoryDatasource implements DataSource<Category> {

  private categorySubject = new BehaviorSubject<Category[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  public dataLength$;

  constructor(private categoryService: CategoryService) {
  }

  loadCategory(pageIndex: number, pageSize: number) {

    this.loadingSubject.next(true);

    this.categoryService.findCategory(pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe((page: CategoryPage) => {
      console.log(page);
      this.dataLength$ = page.totalElements;
      this.categorySubject.next(page.content);
    });

  }

  connect(collectionViewer: CollectionViewer): Observable<Category[]> {
    console.log('Connecting data source');
    return this.categorySubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.categorySubject.complete();
    this.loadingSubject.complete();
  }

}

