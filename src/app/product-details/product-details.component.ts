import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {ActivatedRoute} from '@angular/router';
import {ProductHistory} from '../model/product-history';
import {formatDate} from '@angular/common';
import {Product} from '../model/product';

@Component({
  selector: 'app-line-chart',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  public productChartData: ChartDataSets[];
  public productChartLabels: Label[];
  public productChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public productChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(244,67,54,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public productChartLegend = true;
  public productChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  private productHistories: Array<ProductHistory>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.product = this.route.snapshot.data['productHistories'].product;
    this.productHistories = this.route.snapshot.data['productHistories'].productHistories;
    const dates: Array<string> = this.productHistories.map(value => formatDate(value.date, 'yyyy-MM-dd hh:mm', 'en-US'));
    const prices: Array<number> = this.productHistories.map(value => value.price);
    const quantities: Array<number> = this.productHistories.map(value => value.quantity);
    this.productChartData = [
      {data: prices, label: 'prices'},
      {data: quantities, label: 'quantities'}
    ];
    this.productChartLabels = dates;
  }

}
