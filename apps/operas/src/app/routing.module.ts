import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OperasComponent } from './operas/operas.component';

const routes: Route[] = [
  {path: '', redirectTo: '/operas', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'operas', component: OperasComponent},
  {path: '**', redirectTo: '/operas', pathMatch: 'full'}
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
