/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestUtilities } from '../test-shared/testUtilities';

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
      TestUtilities.VerifyElementById(nativeElement, "btnToggleNavigation");
    });

    it('collapsable navbar should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "navbarSupportedContent");
    });

    it('navbar dropdown should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "navbarDropdown");
    });

    it('navbar should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "navbar");
    });

    it('Home link should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "homeLink");
    });

    it('About link should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "aboutLink");
    });

    it('Find product link should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "findProductLink");
    });

    it('Place order link should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "placeOrderLink");
    });

    it('Pay link should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "payLink");
    });
  });
});
