import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ManufacturersComponent} from './manufacturers/manufacturers.component';
import {CategoriesComponent} from './categories/categories.component';
import {BrandsComponent} from './brands/brands.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductResolver} from './services/product.resolver';
import {StatsComponent} from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent

  },
  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'manufacturers',
    component: ManufacturersComponent
  },

  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
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
