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


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([
      AlbumsEffects,
      CitiesEffects
    ]),
  ]
})
export class CoreStateModule {}
