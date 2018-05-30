import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductSummary } from './product-summary';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {
  }

  public getProductSummaries(): Observable<ProductSummary[]> {
    return this._http.get<ProductSummary[]>('api/products');
  }
}
