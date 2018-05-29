import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { Expect } from './test-shared/testUtilities';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductModule } from './product/product.module';
import { CarouselComponent } from './carousel/carousel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorPagesModule } from './error-pages/error-pages.module';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        SearchComponent,
        FooterComponent,
        CarouselComponent,
        WelcomeComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        ProductModule,
        ErrorPagesModule
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
    expect(app.title).toEqual('TQ Auction');
  }));

  describe('AppComponent render tests', () => {
    let nativeElement: any;

    beforeEach(() => {
      nativeElement = fixture.debugElement.nativeElement;
    });

    it('should render navbar component', async(() => {
      Expect.DirectiveExists(nativeElement, 'tq-navbar');
    }));

    it('should render search component', async(() => {
      Expect.DirectiveExists(nativeElement, 'tq-search');
    }));

    it('should render carousel component', async() => {
      Expect.DirectiveExists(nativeElement, 'tq-carousel');
    });
    
    it('should render router outlet component', async(() => {
      Expect.DirectiveExists(nativeElement, 'router-outlet');
    }));
  
    it('should render footer component', async(() => {
      Expect.DirectiveExists(nativeElement, 'tq-footer');
    }));
  });
});
