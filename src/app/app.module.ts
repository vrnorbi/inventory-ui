import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './services/products.service';
import {ProductsTableComponent} from './products-table/products-table.component';
import {ManufacturersTableComponent} from './manufacturers-table/manufacturers-table.component';
import {ProductComponent} from './product/product.component';
import {AddDialogComponent} from './add/add.dialog.component';
import {FormsModule} from '@angular/forms';
import {ManufacturersService} from './services/manufacturers.service';
import {ProductResolver} from './services/product.resolver';
import {CategoryService} from './services/category.service';
import {MatDialogModule} from '@angular/material/dialog';
import {CategoryTableComponent} from './category-table/category-table.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ManufacturersTableComponent,
    ProductsTableComponent,
    ProductComponent,
    AddDialogComponent,
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
    FormsModule,
    MatSelectModule
  ],
  providers: [
    ProductsService,
    ManufacturersService,
    CategoryService,
    ProductResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
