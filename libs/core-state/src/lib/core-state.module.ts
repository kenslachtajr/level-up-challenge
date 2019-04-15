import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '.';
import { CoreDataModule } from '@workspace/core-data';
import { AlbumsEffects } from './albums/albums.effects';
import { CitiesEffects } from './cities/cities.effects';
import { PaintersEffects } from './painters/painters.effects';
import { LiteratureEffects } from './literature/literature.effects';
import { PokemonEffects } from './pokemon/pokemon.effects';
import { StarWarsEffects } from './star-wars/star-wars.effects';


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([
      AlbumsEffects,
      CitiesEffects,
      PaintersEffects,
      LiteratureEffects,
      PokemonEffects,
      StarWarsEffects
    ]),
  ]
})
export class CoreStateModule {}
