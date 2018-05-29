/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivatedRouteMock } from '../../test-shared/activated-route-mock';
import { Expect } from '../../test-shared/testUtilities';

import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let activatedRoute: any;
  const productId : string = '100abc';

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

  describe('ProductDetailComponent render tests', () => {
    let nativeElement: any;

    beforeEach(() => {
      nativeElement = fixture.debugElement.nativeElement;      
    });

    it('should display the product id', async(() => {
      Expect.IsTrue(nativeElement, '.card-text', (result) => {
        return result[0].innerText.includes(productId);
      });
    }));

  });
});
