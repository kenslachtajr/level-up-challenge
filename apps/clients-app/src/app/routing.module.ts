import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Route[] = [
  {path: '', redirectTo: '/clients', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'clients', component: ClientsComponent},
  {path: '**', redirectTo: '/clients', pathMatch: 'full'}
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
