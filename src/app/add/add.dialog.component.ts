import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../model/product';
import {Category} from '../model/category';
import {CategoryService} from '../services/category.service';
import {Manufacturer} from '../model/manufacturer';
import {ManufacturersService} from '../services/manufacturers.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: 'add.dialog.component.html',
})
export class AddDialogComponent implements OnInit {

  prod: Product;
  categories: Array<Category>;
  selectedCategory: Category;
  selectedManufacturer: Manufacturer;
  manufacturers: Array<Manufacturer>;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private categoryService: CategoryService,
    private manufacturerService: ManufacturersService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.prod = this.product;
    this.categoryService.findCategory(0, 10).subscribe(data => {
      this.categories = data.content;
    });

    this.manufacturerService.findManufacturers(0, 10).subscribe(data => {
      this.manufacturers = data.content;
    });
  }

}
