import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CoursesCardListComponent} from './courses-card-list/courses-card-list.component';
import {CourseComponent} from './course/course.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CoursesService} from './services/courses.service';
import {HttpClientModule} from '@angular/common/http';
import {CourseResolver} from './services/course.resolver';
import {ProductsService} from './services/products.service';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ProductComponent} from "./product/product.component";
import {ProductResolver} from "./services/product.resolver";
import {AddDialogComponent} from "./add/add.dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {ManufacturersTableComponent} from "./manufacturers-table/manufacturers-table.component";
import {ManufacturersService} from "./services/manufacturers.service";
import {CategoryTableComponent} from "./category-table/category-table.component";
import {CategoryService} from "./services/category.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CoursesCardListComponent,
    ProductsTableComponent,
    ManufacturersTableComponent,
    CategoryTableComponent,
    ProductsTableComponent,
    ProductComponent,
    AddDialogComponent,
    ProductsTableComponent,
    ManufacturersTableComponent,
    CategoryTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    CourseResolver,
    ProductsService,
    ManufacturersService,
    CategoryService,
    ProductsService,
    ProductResolver,
    ProductsService,
    ManufacturersService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
