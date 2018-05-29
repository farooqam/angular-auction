/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Expect } from '../test-shared/testUtilities';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('NavbarComponent render tests', () => {
    let nativeElement: any;

    beforeEach(() => {
      nativeElement = fixture.debugElement.nativeElement;
    });

    it('navigation toggle should render', async() => {
      Expect.ElementExists(nativeElement, "btnToggleNavigation");
    });

    it('collapsable navbar should render', async() => {
      Expect.ElementExists(nativeElement, "navbarSupportedContent");
    });

    it('navbar dropdown should render', async() => {
      Expect.ElementExists(nativeElement, "navbarDropdown");
    });

    it('navbar should render', async() => {
      Expect.ElementExists(nativeElement, "navbar");
    });

    it('Home link should render', async() => {
      Expect.ElementExists(nativeElement, "homeLink");
    });

    it('About link should render', async() => {
      Expect.ElementExists(nativeElement, "aboutLink");
    });

    it('Product list link should render', async() => {
      Expect.ElementExists(nativeElement, "productListLink");
    });

    it('Find product link should render', async() => {
      Expect.ElementExists(nativeElement, "findProductLink");
    });

    it('Place order link should render', async() => {
      Expect.ElementExists(nativeElement, "placeOrderLink");
    });

    it('Pay link should render', async() => {
      Expect.ElementExists(nativeElement, "payLink");
    });
  });
});
