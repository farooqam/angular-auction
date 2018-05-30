/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Expect } from '../../test-shared/testUtilities';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivatedRouteMock } from '../../test-shared/activated-route-mock';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CarouselComponent } from '../../carousel/carousel.component';
import { ProductService } from '../../shared/product-service/product.service';
import { ProductServiceMock } from '../../test-shared/product-service-mock';
import { ProductSummary } from '../../shared/product-service/product-summary';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let activatedRoute: any;  
  let service: ProductServiceMock;
  let mockProducts: ProductSummary[];
  let productId: string = "100";

  beforeEach(async(() => {

    activatedRoute = new ActivatedRouteMock({id: productId});    
    
    mockProducts = [
      {
        "id": productId, 
        "name": "Mock Product 1", 
        "price": 100
      }
    ];

    service = new ProductServiceMock(mockProducts);
    

    TestBed.configureTestingModule({
      declarations: [ 
        ProductListComponent,
        ProductDetailComponent,
        CarouselComponent
      ],
      providers: [
        {
          provide: ProductService, 
          useValue: service
        },
        {
          provide: ActivatedRoute, 
          useValue: activatedRoute
        }
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the products', () => {
    component.products.subscribe((products) => {
      expect(products[0]).toEqual(mockProducts[0]);
    });
  });

  describe('ProductListComponent render tests', () => {

    let nativeElement: any;

    beforeEach(() => {
      nativeElement = fixture.debugElement.nativeElement;
    });

    it('should render product detail components', async(() => {
      Expect.DirectiveExists(nativeElement, 'tq-product-detail', 1, 100);
    }));
  });
});
