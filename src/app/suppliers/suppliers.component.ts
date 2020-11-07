import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {fromEvent, merge} from 'rxjs';
import {HttpService} from '../services/http.service';
import {PagingTableDatasource} from '../services/paging.table.datasource';
import {Supplier} from '../model/supplier';
import {ColorService} from '../services/color.service';


@Component({
  selector: 'app-supplier-table',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit, AfterViewInit {

  dataSource: PagingTableDatasource<Supplier>;

  displayedColumns = ['name', 'iban', 'url', 'rating'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute,
              private httpService: HttpService,
              private colorService: ColorService) {}

  ngOnInit() {
    this.dataSource = new PagingTableDatasource('/suppliers/filter/', this.httpService);
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

          this.loadSuppliers();
        })
      )
      .subscribe();

    merge(/*this.sort.sortChange,*/ this.paginator.page)
      .pipe(
        tap(() => this.loadSuppliers())
      )
      .subscribe();

  }

  loadSuppliers() {
    this.dataSource.loadData(
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.input.nativeElement.value);
  }

}
