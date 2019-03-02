import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { JazzComponent } from './jazz/jazz.component';

const routes: Route[] = [
  {path: '', redirectTo: '/musicians', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'musicians', component: JazzComponent},
  {path: '**', redirectTo: '/musicians', pathMatch: 'full'}
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
