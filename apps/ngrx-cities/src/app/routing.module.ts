import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
    {path: '', redirectTo: '/cities', pathMatch: 'full' },
    {path: 'cities', component: CitiesComponent },
    {path: 'login', component: LoginComponent },
    {path: '**', redirectTo: './cities', pathMatch: 'full' }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }
