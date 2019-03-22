import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Route[] = [
    {path: '', redirectTo: './cities', pathMatch: 'full' },
    {path: 'login', component: LoginComponent },
    {path: 'cities', component: CitiesComponent },
    {path: '**', redirectTo: './cities', pathMatch: 'full' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }
