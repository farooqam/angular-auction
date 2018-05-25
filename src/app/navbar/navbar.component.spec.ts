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
      TestUtilities.Verify(nativeElement, ".navbar", (result) => result != null);
    });

    it('navbar brand should render', async() => {
      
      TestUtilities.Verify(nativeElement, ".navbar-brand", (nodes) => {

        var brandLinks = Array.prototype.filter.call(nodes, (item) => {
          return item.textContent.includes('TQ Auction');
        }).length;

        return (brandLinks == 1);
      });
    });

    it('navbar links should render', async() => {
      
      TestUtilities.Verify(nativeElement, ".nav-link", (nodes) => {

        var homeLinks = Array.prototype.filter.call(nodes, (item) => {
          return item.textContent.includes('Home');
        }).length;

        var aboutLinks = Array.prototype.filter.call(nodes, (item) => {
          return item.textContent.includes('About');
        }).length;

        var servicesLinks = Array.prototype.filter.call(nodes, (item) => {
          return item.textContent.includes('Services');
        }).length;

        return (homeLinks == 1) && (aboutLinks == 1) && (servicesLinks == 1);
      });
    });

    it('drop-down links should render', async() => {
      
      TestUtilities.Verify(nativeElement, ".dropdown-item", (nodes) => {
        var findProductLinks = Array.prototype.filter.call(nodes, (item) => {
          return item.textContent.includes('Find Product');
        }).length;

        var placeOrderLinks = Array.prototype.filter.call(nodes, (item) => {
          return item.textContent.includes('Place Order');
        }).length;

        var payLinks = Array.prototype.filter.call(nodes, (item) => {
          return item.textContent.includes('Pay');
        }).length;

        return (findProductLinks == 1) && (placeOrderLinks == 1) && (payLinks == 1);
      });
    });
  });
});
