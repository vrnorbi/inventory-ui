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
import {ProductsComponent} from './products/products.component';
import {ManufacturersComponent} from './manufacturers/manufacturers.component';
import {ProductEditorDialogComponent} from './product-editor/product-editor.dialog.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {CategoriesComponent} from './categories/categories.component';
import {MatSelectModule} from '@angular/material/select';
import {HttpService} from './services/http.service';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {BrandsComponent} from './brands/brands.component';
import {ChartsModule} from 'ng2-charts';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductResolver} from './services/product.resolver';
import {ColorService} from './services/color.service';
import {StatsComponent} from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ManufacturersComponent,
    ProductsComponent,
    ProductEditorDialogComponent,
    CategoriesComponent,
    SuppliersComponent,
    BrandsComponent,
    ProductDetailsComponent,
    StatsComponent
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
    MatSelectModule,
    ChartsModule
  ],
  providers: [
    ProductsService,
    ProductResolver,
    HttpService,
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
