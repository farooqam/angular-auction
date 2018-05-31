import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductSummary } from './product-summary';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {
  }

  public getProductSummaries(): Observable<ProductSummary[]> {
    return this._http.get<ProductSummary[]>('api/products');
  }

  public getProduct(id: string): Observable<Product> {
    return this._http.get<Product>(`api/products/${id}`);
  }
}
