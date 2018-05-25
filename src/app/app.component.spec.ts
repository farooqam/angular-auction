import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { TestUtilities } from './test-shared/testUtilities';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductModule } from './product/product.module';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        SearchComponent,
        FooterComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        ProductModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(app).toBeTruthy();
  }));
  
  it('should have the expected title', async(() => {
    expect(app.title).toEqual('Angular Auction');
  }));

  describe('AppComponent render tests', () => {
    let nativeElement: any;

    beforeEach(() => {
      nativeElement = fixture.debugElement.nativeElement;
    });
    
    let verifyElementText = function(elementName: string, expectedText: string) {
      TestUtilities.VerifyElementText(nativeElement, elementName, expectedText);
    }

    it('should render navbar component', async(() => {
      TestUtilities.VerifyElementText(nativeElement, 'tq-navbar', 'navbar works!');
    }));

    it('should render search component', async(() => {
      TestUtilities.VerifyElementText(nativeElement, 'tq-search', 'search works!'); 
    }));
  
    it('should render router outlet component', async(() => {
      TestUtilities.VerifyElementExists(nativeElement, 'router-outlet');
    }));
  
    it('should render footer component', async(() => {
      TestUtilities.VerifyElementText(nativeElement, 'tq-footer', 'footer works!');
    }));
  
  });
});
