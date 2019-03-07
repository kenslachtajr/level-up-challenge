import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Route[] = [
  {path: '', redirectTo: '/colors', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'colors', component: ColorsComponent},
  {path: '**', redirectTo: '/colors', pathMatch: 'full'}
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
