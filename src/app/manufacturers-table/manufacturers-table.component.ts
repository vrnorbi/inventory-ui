import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {tap} from 'rxjs/operators';
import {merge} from 'rxjs';
import {ManufacturersDatasource} from '../services/manufacturers.datasource';
import {ManufacturersService} from '../services/manufacturers.service';


@Component({
  selector: 'app-manufacturers-table',
  templateUrl: './manufacturers-table.component.html',
  styleUrls: ['./manufacturers-table.component.css']
})
export class ManufacturersTableComponent implements OnInit, AfterViewInit {

  dataSource: ManufacturersDatasource;

  displayedColumns = ['name', 'country', 'url', 'rating'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  constructor(private route: ActivatedRoute,
              private manufacturersService: ManufacturersService) {}

  ngOnInit() {
    this.dataSource = new ManufacturersDatasource(this.manufacturersService);
    this.dataSource.loadManufacturers(0, 10);
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
        tap(() => this.loadManufacturers())
      )
      .subscribe();

  }

  loadManufacturers() {
    this.dataSource.loadManufacturers(
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

}
