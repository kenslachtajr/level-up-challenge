import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Route[] = [
  {path: '', redirectTo: '/employees', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: '**', redirectTo: '/employees', pathMatch: 'full'}
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
