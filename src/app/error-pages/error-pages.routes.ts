import { Route } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Route[] = [
    {
        path: '**',
        component: PageNotFoundComponent
    }
];