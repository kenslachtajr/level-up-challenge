import { NgModule } from '@angular/core';
import { Route, RouterModule, Router } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
    { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
    { path: 'pokemon', component: PokemonComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/pokemon', pathMatch: 'full' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}