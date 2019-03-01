import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Route[] = [
  {path: '', redirectTo: '/pizza', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: '**', redirectTo: '/pizza', pathMatch: 'full'}
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