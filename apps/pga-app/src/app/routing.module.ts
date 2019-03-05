import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PgaComponent } from './pga/pga.component';

const routes: Route[] = [
  {path: '', redirectTo: '/pga', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'pga', component: PgaComponent},
  {path: '**', redirectTo: '/pga', pathMatch: 'full'}
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