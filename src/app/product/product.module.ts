import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './product.module.routes';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from '../shared/product-service/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { productServiceMock } from './product-service-mock';
import { ProductSummary } from '../shared/product-service/product-summary';
import { ProductSummaryComponent } from './product-summary/product-summary.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductDetailComponent,
    ProductItemComponent,
    ProductListComponent,,
    ProductSummaryComponent
],
  providers: [
    {
      provide: ProductService,
      useValue: productServiceMock
    }
  ],
  exports: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { 
}
