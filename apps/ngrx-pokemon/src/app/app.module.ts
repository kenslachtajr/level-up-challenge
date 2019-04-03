import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';
import { CoreDataModule } from '@workspace/core-data';

@NgModule({
  declarations: [AppComponent, LoginComponent, PokemonComponent, PokemonListComponent, PokemonDetailsComponent],
  imports: [BrowserModule, CoreDataModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
