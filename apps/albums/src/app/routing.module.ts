import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Route[] = [
  {path: '', redirectTo: '/albums', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: '**', redirectTo: '/albums', pathMatch: 'full'}
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
