import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { LiteratureComponent } from './literature/literature.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: '', redirectTo: '/literature', pathMatch: 'full' },
  { path: 'literature', component: LiteratureComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/literature', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
