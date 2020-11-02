import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {fromEvent, merge} from 'rxjs';
import {HttpService} from '../services/http.service';
import {PagingTableDatasource} from '../services/paging.table.datasource';
import {Brand} from '../model/brand';


@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.css']
})
export class BrandTableComponent implements OnInit, AfterViewInit {

  dataSource: PagingTableDatasource<Brand>;

  displayedColumns = ['name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute,
              private httpService: HttpService) {}

  ngOnInit() {
    this.dataSource = new PagingTableDatasource('/brands/filter/', this.httpService);
    this.dataSource.loadData(0, 10);
  }

  ngAfterViewInit() {
    //
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    //
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadBrands();
        })
      )
      .subscribe();

    merge(/*this.sort.sortChange,*/ this.paginator.page)
      .pipe(
        tap(() => this.loadBrands())
      )
      .subscribe();

  }

  loadBrands() {
    this.dataSource.loadData(
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.input.nativeElement.value
    );
  }

}
