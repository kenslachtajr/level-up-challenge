import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/albums', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
