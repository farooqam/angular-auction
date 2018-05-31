/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivatedRouteMock } from '../../test-shared/activated-route-mock';
import { ProductServiceMock } from '../../test-shared/product-service-mock';
import { Expect } from '../../test-shared/testUtilities';

import { ProductDetailComponent } from './product-detail.component';
import { ProductSummary } from '../../shared/product-service/product-summary';
import { ProductService } from '../../shared/product-service/product.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let activatedRoute: any;
  let service: ProductServiceMock;
  const productId : string = 'product1';
  
  let mockProductSummmaries: ProductSummary[] = [ 
  {
    'id': productId,
    'name': 'Mock Product',
    'price': 19.99,
    'thumbnailUri': 'http://foo.img'
  }];

  service = new ProductServiceMock(mockProductSummmaries);
  
  beforeEach(async(() => {
    
    activatedRoute = new ActivatedRouteMock({id: productId});

    TestBed.configureTestingModule({
      declarations: [ 
        ProductDetailComponent 
      ],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: activatedRoute
        },
        {
          provide: ProductService, 
          useValue: service
        }
      ],
      imports: [
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the product', () => {
    expect(component.product.id).toEqual(mockProductSummmaries[0].id);
    expect(component.product.name).toEqual(mockProductSummmaries[0].name);
    expect(component.product.price).toEqual(mockProductSummmaries[0].price);
  });
});
