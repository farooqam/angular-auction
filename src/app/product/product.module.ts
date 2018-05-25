import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductItemComponent,
    ProductItemComponent
  ]
})
export class ProductModule { }
