import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from '../shared/product-service/product.service';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductItemComponent,
    ProductListComponent
],
  providers: [
    ProductService
  ],
  exports: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
