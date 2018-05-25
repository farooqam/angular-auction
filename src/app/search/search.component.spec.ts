/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestUtilities } from '../test-shared/testUtilities';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('SearchComponent render tests', () => {
    let nativeElement: any;

    beforeEach(() => {
      nativeElement = fixture.debugElement.nativeElement;
    });    

    it('Search form should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "searchForm");
    });

    it('Product title text box should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "productTitle");
    });

    it('Product price text box should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "productPrice");
    });

    it('Product category drop-down should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "productCategory");
    });

    it('Search button should render', async() => {
      TestUtilities.VerifyElementById(nativeElement, "btnSearch");
    });
  });
});
