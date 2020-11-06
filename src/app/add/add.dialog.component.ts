import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../model/product';
import {Category} from '../model/category';
import {Manufacturer} from '../model/manufacturer';
import {Supplier} from '../model/supplier';
import {Brand} from '../model/brand';
import {ProductsService} from '../services/products.service';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: 'add.dialog.component.html',
})
export class AddDialogComponent implements OnInit {
  categories: Array<Category>;
  manufacturers: Array<Manufacturer>;
  suppliers: Array<Supplier>;
  brands: Array<Brand>;

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private productsService: ProductsService,
    private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.findAll<Category>('/categories/all').subscribe(data => {
      this.categories = data;
    });

    this.httpService.findAll<Manufacturer>('/manufacturers/all').subscribe(data => {
      this.manufacturers = data;
    });

    this.httpService.findAll<Supplier>('/suppliers/all').subscribe(data => {
      this.suppliers = data;
    });

    this.httpService.findAll<Brand>('/brands/all').subscribe(data => {
      this.brands = data;
    });
  }

  onNoClick(): void {
    console.log(this.product.category);
    this.dialogRef.close();
  }

  onSave() {
    this.httpService.saveProduct('/products/new', this.product)
      .subscribe(data => this.save.emit(data));
  }
}
