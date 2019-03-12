import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([

    ]),
  ]
})
export class CoreStateModule {}
