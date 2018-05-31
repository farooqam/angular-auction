import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ProductService } from '../../shared/product-service/product.service';
import { ProductSummary } from '../../shared/product-service/product-summary';

@Component({
  selector: 'tq-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: ProductSummary[];

  constructor(
    private _productService: ProductService,
    private _router: Router) { }

  ngOnInit() {
    this._productService.getProductSummaries().subscribe((products) => {
      this.products = products;
    });
  }

  onCardClick(productId: string) : void {
    this._router.navigate(['/products/', productId]);
  }
}
