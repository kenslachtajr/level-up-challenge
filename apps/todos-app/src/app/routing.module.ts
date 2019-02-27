import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

const routes: Route[] = [
  {path: '', redirectTo: '/todos', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'todos', component: TodoComponent},
  {path: '**', redirectTo: '/todos', pathMatch: 'full'}
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
