/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { ProductSummary } from './product-summary';
import { Product } from './product';

describe('Service: Product', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get the product summaries', async(() => {
    const productsSummaries: ProductSummary[] = [
      {
        'id': 'product1', 
        'name': 'product 1', 
        'price': 100, 
        'thumbnailUri': 'http://www.foo.img'
      }
    ];

    service.getProductSummaries().subscribe(res => expect(res).toEqual(productsSummaries));

    let request = httpMock.expectOne('api/products');
    request.flush(productsSummaries);
  }));

  it('should get the product summary', async(() => {
    const productId: string = 'product1';

    const product: Product = 
      {
        'id': productId, 
        'name': 'product 1', 
        'price': 100, 
        'imageUri': 'http://placehold.it/800x300',
        'description': 'A product that has many uses. It is versatile enough to be used indoors or outdoors.'
      };

    service.getProduct(productId).subscribe(res => expect(res).toEqual(product));

    let request = httpMock.expectOne(`api/products/${productId}`);
    request.flush(product);
  }));

});
