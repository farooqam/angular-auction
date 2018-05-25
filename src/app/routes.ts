import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ProductListComponent
    }
];