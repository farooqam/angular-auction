import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductSummary } from '../shared/product-service/product-summary';

export class ProductServiceMock {

    constructor(public products: ProductSummary[]) {

    }

    public getProductSummaries(): Observable<ProductSummary[]> {
        return of(this.products);
    }
}
