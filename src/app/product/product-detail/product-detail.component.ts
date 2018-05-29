import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tq-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId: string;

  constructor(private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    this._route.paramMap.subscribe(pmap => this.productId = pmap.get('id'));
  }

}
