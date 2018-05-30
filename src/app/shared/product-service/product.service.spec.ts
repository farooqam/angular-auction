/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { ProductSummary } from './product-summary';

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

  it('should get the products', async(() => {
    const products: ProductSummary[] = [
      {
        "id": "product1", "name": "product 1", "price": 100, 'thumbnailUri': 'http://www.foo.img'
      }
    ];

    service.getProducts().subscribe(res => expect(res).toEqual(products));

    let request = httpMock.expectOne('api/products');
    request.flush(products);
  }));
});
