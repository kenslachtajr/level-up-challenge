import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DrugStoreComponent } from './drug-store/drug-store.component';

const routes: Route[] = [
  {path: '', redirectTo: '/drug-store', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'drug-store', component: DrugStoreComponent},
  {path: '**', redirectTo: '/drug-store', pathMatch: 'full'}
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
