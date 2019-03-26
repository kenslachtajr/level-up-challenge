import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { PaintersComponent } from './painters/painters.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: '', redirectTo: '/painters', pathMatch: 'full' },
  { path: 'painters', component: PaintersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/painters', pathMatch: 'full' }
];

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
