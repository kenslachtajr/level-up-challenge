import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PianoBrandsComponent } from './piano-brands/piano-brands.component';

const routes: Route[] = [
  {path: '', redirectTo: '/piano-brands', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'piano-brands', component: PianoBrandsComponent},
  {path: '**', redirectTo: '/piano-brands', pathMatch: 'full'}
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