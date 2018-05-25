import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';
import { VersionComponent } from './version/version.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent,
    RatingComponent
],
  imports: [
    BrowserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
