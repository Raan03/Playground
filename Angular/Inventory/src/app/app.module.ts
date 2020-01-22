import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list/products-list.component';
import { ProductRowComponent } from './products/product-row/productrow.component';
import { ProductImageComponent } from './products/product-image/product-image.component';
import { ProductPriceDisplayComponent } from './products/product-pricedisplay/pricedisplay.component';
import { ProductDepartmentComponent } from './products/product-department/productdepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductPriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
