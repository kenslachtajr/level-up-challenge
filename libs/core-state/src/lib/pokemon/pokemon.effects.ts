import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { Pokemon, PokemonService } from '@workspace/core-data';
import {
  PokemonActionTypes,
  PokemonLoaded,
  CreatePokemon,
  UpdatePokemon,
  DeletePokemon,
  LoadPokemon,
  PokemonUpdated,
  PokemonCreated,
  PokemonDeleted
} from './pokemon.actions';
import { PokemonState } from './pokemon.reducer';

@Injectable({ providedIn: 'root' })
export class PokemonEffects {
  @Effect()
  loadingPokemon$ = this.dataPersistence.fetch(PokemonActionTypes.LoadPokemon, {
    run: (action: LoadPokemon, state: PokemonState) => {
      return this.pokemonService
        .get()
        .pipe(map((res: Pokemon[]) => new PokemonLoaded(res)));
    },
    onError: (action: LoadPokemon, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  createPokemon$ = this.dataPersistence.pessimisticUpdate(
    PokemonActionTypes.CreatePokemon,
    {
      run: (action: CreatePokemon, state: PokemonState) => {
        return this.pokemonService
          .create(action.payload)
          .pipe(map((res: Pokemon) => new PokemonCreated(res)));
      },

      onError: (action: CreatePokemon, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updatePokemon$ = this.dataPersistence.pessimisticUpdate(
    PokemonActionTypes.UpdatePokemon,
    {
      run: (action: UpdatePokemon, state: PokemonState) => {
        return this.pokemonService
          .update(action.payload)
          .pipe(map((res: Pokemon) => new PokemonUpdated(res)));
      },

      onError: (action: UpdatePokemon, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deletePokemon$ = this.dataPersistence.pessimisticUpdate(
    PokemonActionTypes.DeletePokemon,
    {
      run: (action: DeletePokemon, state: PokemonState) => {
        return this.pokemonService
          .delete(action.payload.id)
          .pipe(map(_ => new PokemonDeleted(action.payload)));
      },

      onError: (action: DeletePokemon, error) => {
        console.log('error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PokemonState>,
    private pokemonService: PokemonService
  ) {}
}
