import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from '../shared/product-service/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductItemComponent,
    ProductListComponent,
    CarouselComponent
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
