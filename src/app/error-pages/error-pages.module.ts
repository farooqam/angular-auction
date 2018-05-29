import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes } from './error-pages.routes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class ErrorPagesModule { }
