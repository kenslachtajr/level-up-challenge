import { NgModule } from '@angular/core';
import { Route, RouterModule, Router } from '@angular/router';

import { StarWarsComponent } from './star-wars/star-wars.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
    { path: '', redirectTo: '/star-wars', pathMatch: 'full' },
    { path: 'star-wars', component: StarWarsComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/star-wars', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}