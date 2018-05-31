import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product-service/product.service';
import { Product } from '../../shared/product-service/product';

@Component({
  selector: 'tq-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  constructor(
    private _service: ProductService,
    private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    let productId: string;
    this._route.paramMap.subscribe(pmap => productId = pmap.get('id'));
    this._service.getProduct(productId).subscribe(prod => this.product = prod);
  }

}
