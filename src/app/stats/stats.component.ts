import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Stat} from '../model/stat';
import {TableDatasource} from '../services/table.datasource';


@Component({
  selector: 'app-brand-table',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  lowQuantityDataSource: TableDatasource<Stat>;
  lowPriceDataSource: TableDatasource<Stat>;
  lowestCategoryPriceDataSource: TableDatasource<Stat>;

  displayedColumns = ['name', 'value', 'actions'];

  constructor(private httpService: HttpService) {
    this.lowQuantityDataSource = new TableDatasource<Stat>(httpService);
    this.lowPriceDataSource = new TableDatasource<Stat>(httpService);
    this.lowestCategoryPriceDataSource = new TableDatasource<Stat>(httpService);
  }

  ngOnInit() {
    this.lowQuantityDataSource.loadData('/products/low-quantity/');
    this.lowPriceDataSource.loadData('/products/low-price/');
    this.lowestCategoryPriceDataSource.loadData('/products/low-price-in-category/');
  }

}
