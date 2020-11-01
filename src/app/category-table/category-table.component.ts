import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {tap} from 'rxjs/operators';
import {merge} from 'rxjs';
import {PagingTableDatasource} from '../services/paging.table.datasource';
import {HttpService} from '../services/http.service';
import {Category} from "../model/category";


@Component({
  selector: 'category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit, AfterViewInit {

  dataSource: PagingTableDatasource<Category>;

  displayedColumns = ['name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute,
              private httpService: HttpService) {}

  ngOnInit() {
    this.dataSource = new PagingTableDatasource('/categories/filter/', this.httpService);
    this.dataSource.loadCategory(0, 10);
  }

  ngAfterViewInit() {
    //
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    //
    // fromEvent(this.input.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged(),
    //     tap(() => {
    //       this.paginator.pageIndex = 0;
    //
    //       this.loadProductsPage();
    //     })
    //   )
    //   .subscribe();

    merge(/*this.sort.sortChange,*/ this.paginator.page)
      .pipe(
        tap(() => this.loadCategory())
      )
      .subscribe();

  }

  loadCategory() {
    this.dataSource.loadCategory(
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

}
