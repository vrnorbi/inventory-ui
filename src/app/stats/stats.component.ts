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

  dataSource: TableDatasource<Stat>;

  displayedColumns = ['name', 'value', 'actions'];

  constructor(private httpService: HttpService) {
    this.dataSource = new TableDatasource<Stat>(httpService);
  }

  ngOnInit() {
    this.dataSource.loadData('/products/low-quantity/');
  }

}
