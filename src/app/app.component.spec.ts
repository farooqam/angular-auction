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
    expect(app.title).toEqual('TQ Auction');
  }));

  describe('AppComponent render tests', () => {
    let nativeElement: any;

    beforeEach(() => {
      nativeElement = fixture.debugElement.nativeElement;
    });

    it('should render navbar component', async(() => {
      TestUtilities.Verify(nativeElement, '.navbar', (nodes) => {
        return nodes.length == 1;
      });
    }));

    it('should render search component', async(() => {
      TestUtilities.Verify(nativeElement, 'tq-search', (nodes) => {
        return nodes.length == 1 && nodes[0].textContent.includes('search works!');
      }); 
    }));
  
    it('should render router outlet component', async(() => {
      TestUtilities.Verify(nativeElement, 'router-outlet', (nodes) => {
        return nodes.length == 1;
      });
    }));
  
    it('should render footer component', async(() => {
      TestUtilities.Verify(nativeElement, 'tq-footer', (nodes) => {
        return nodes.length == 1 && nodes[0].textContent.includes('footer works!');
      }); 
    }));
  
  });
});
