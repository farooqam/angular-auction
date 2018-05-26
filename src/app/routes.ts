import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    }
];