import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ManufacturersTableComponent} from './manufacturers-table/manufacturers-table.component';
import {CategoryTableComponent} from './category-table/category-table.component';
import {BrandTableComponent} from './brand-table/brand-table.component';
import {SupplierTableComponent} from './supplier-table/supplier-table.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {ProductResolver} from './services/product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsTableComponent

  },
  {
    path: 'products',
    component: ProductsTableComponent
  },

  {
    path: 'manufacturers',
    component: ManufacturersTableComponent
  },

  {
    path: 'categories',
    component: CategoryTableComponent
  },
  {
    path: 'brands',
    component: BrandTableComponent
  },
  {
    path: 'suppliers',
    component: SupplierTableComponent
  },
  {
    path: 'chart',
    component: LineChartComponent
  },
  {
    path: 'products/:id',
    component: LineChartComponent,
    resolve: {
      productHistories: ProductResolver
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
