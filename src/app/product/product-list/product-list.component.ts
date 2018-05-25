import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product-service/product.service';

@Component({
  selector: 'tq-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(_productService: ProductService) { }

  ngOnInit() {
  }

}
