import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './staff/staff.component';

const routes: Route[] = [
  {path: '', redirectTo: '/staff', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'staff', component: StaffComponent},
  {path: '**', redirectTo: '/staff', pathMatch: 'full'}
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