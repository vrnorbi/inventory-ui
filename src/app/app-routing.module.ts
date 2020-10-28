import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ProductComponent} from "./product/product.component";
import {ProductResolver} from "./services/product.resolver";
import {ManufacturersTableComponent} from "./manufacturers-table/manufacturers-table.component";
import {CategoryTableComponent} from "./category-table/category-table.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsTableComponent

  },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'courses/:id',
  //   component: CourseComponent,
  //   resolve: {
  //     course: CourseResolver
  //   }
  // },
  {
    path: 'products',
    component: ProductsTableComponent
  },

  {
    path: 'manufacturers',
    component: ManufacturersTableComponent
  },

  {
    path: 'category',
    component: CategoryTableComponent
  },

  {
    path: 'products/:id',
    component: ProductComponent,
    resolve: {
      course: ProductResolver
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
