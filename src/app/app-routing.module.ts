import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './course/course.component';
import {CourseResolver} from './services/course.resolver';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ProductComponent} from "./product/product.component";
import {ProductResolver} from "./services/product.resolver";

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
