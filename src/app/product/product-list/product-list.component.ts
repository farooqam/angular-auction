import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '../../shared/product-service/product.service';
import { ProductSummary } from '../../shared/product-service/product-summary';

@Component({
  selector: 'tq-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Observable<ProductSummary[]>;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }
}
