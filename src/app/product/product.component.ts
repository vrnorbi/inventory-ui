import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from "../model/product";


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((res: Product) => {
      console.log(res);
      this.product = res;
    })
  }

  ngOnInit() {}

}
