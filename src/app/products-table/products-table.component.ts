import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {fromEvent, merge} from 'rxjs';
import {ProductsDataSource} from '../services/products.datasource';
import {ProductsService} from '../services/products.service';


@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, AfterViewInit {

  dataSource: ProductsDataSource;

  displayedColumns = ['name', 'price', 'category', 'supplier', 'manufacturer'];

  pageSize = 6;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('name') nameInput: ElementRef;
  @ViewChild('category') categoryInput: ElementRef;
  @ViewChild('priceFrom') priceFromInput: ElementRef;
  @ViewChild('priceTo') priceToInput: ElementRef;
  @ViewChild('supplier') supplierInput: ElementRef;
  @ViewChild('manufacturer') manufacturerInput: ElementRef;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) {}

  ngOnInit() {
    this.dataSource = new ProductsDataSource(this.productsService);
    this.dataSource.loadProducts('', '', '','','', '', 0, this.pageSize);
  }

  ngAfterViewInit() {
    //
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    //
    merge(
      fromEvent(this.nameInput.nativeElement, 'keyup'),
      fromEvent(this.categoryInput.nativeElement, 'keyup'),
      fromEvent(this.priceFromInput.nativeElement, 'keyup'),
      fromEvent(this.priceToInput.nativeElement, 'keyup'),
      fromEvent(this.supplierInput.nativeElement, 'keyup'),
      fromEvent(this.manufacturerInput.nativeElement, 'keyup'),
    )
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadProductsPage(
            this.nameInput.nativeElement.value,
            this.categoryInput.nativeElement.value,
            this.priceFromInput.nativeElement.value,
            this.priceToInput.nativeElement.value,
            this.supplierInput.nativeElement.value,
            this.manufacturerInput.nativeElement.value
          );
        })
      ).subscribe();

    merge(/*this.sort.sortChange,*/ this.paginator.page)
      .pipe(
        tap(() => this.loadProductsPage(this.nameInput.nativeElement.value,
          this.categoryInput.nativeElement.value,
          this.priceFromInput.nativeElement.value,
          this.priceToInput.nativeElement.value,
          this.supplierInput.nativeElement.value,
          this.manufacturerInput.nativeElement.value))
      )
      .subscribe();

  }

  private loadProductsPage(name: string,
                           category: string,
                           priceFrom: string,
                           priceTo: string,
                           supplier: string,
                           manufacturer: string
                           ) {
    this.dataSource.loadProducts(
      name,
      category,
      priceFrom,
      priceTo,
      supplier,
      manufacturer,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

}
