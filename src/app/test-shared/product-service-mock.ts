import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductSummary } from '../shared/product-service/product-summary';
import { Product } from '../shared/product-service/product';

export class ProductServiceMock {
    constructor(public products: ProductSummary[] = null) {
        
    }

    public getProductSummaries(): Observable<ProductSummary[]> {
        return of(this.products);
    }

    public getProduct(id: string): Observable<Product> {
        let productSummary: ProductSummary = this.products.filter((ps) => ps.id === id)[0];

        return of( {
            'id': productSummary.id,
            'name': productSummary.name,
            'price': productSummary.price,
            'imageUri': 'http://placehold.it/350x150',
            'description': 'Product description.'
        });
    }
}
