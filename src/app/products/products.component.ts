import {Component, OnInit} from '@angular/core';
import {TableColumn} from '../table/TableColumn';
import {Product} from './product';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  productssTableColumns: TableColumn[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initColumns();
    this.productService.findAll().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  initColumns(): void {
    this.productssTableColumns = [
      {
        name: 'products name',
        dataKey: 'name'
      },
      {
        name: 'products price',
        dataKey: 'price'
      },
      {
        name: 'category',
        dataKey: 'category.name'
      }
    ];
  }

}
