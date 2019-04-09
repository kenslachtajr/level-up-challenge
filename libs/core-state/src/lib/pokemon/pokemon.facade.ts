import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { PokemonState } from './pokemon.reducer';
import * as PokemonAction from './pokemon.actions';
import {
  selectAllPokemon,
  selectPokemonLoadingState,
  selectCurrentPokemon
} from '..';
import { Pokemon } from '@workspace/core-data';
import { PokemonActionTypes } from './pokemon.actions';

@Injectable({
  providedIn: 'root'
})
export class PokemonFacade {
  allPokemon$ = this.store.pipe(select(selectAllPokemon));
  currentPokemon$ = this.store.pipe(select(selectCurrentPokemon));
  pokemonLoading$ = this.store.pipe(select(selectPokemonLoadingState));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === PokemonActionTypes.CreatePokemon ||
        action.type === PokemonActionTypes.UpdatePokemon ||
        action.type === PokemonActionTypes.DeletePokemon
    )
  );

  constructor(
    private store: Store<PokemonState>,
    private actions$: ActionsSubject
  ) {}

  selectPokemon(id) {
    this.store.dispatch(new PokemonAction.PokemonSelected(id));
  }

  loadPokemon() {
    this.store.dispatch(new PokemonAction.LoadPokemon());
  }

  addPokemon(pokemon: Pokemon) {
    this.store.dispatch(new PokemonAction.CreatePokemon(pokemon));
  }

  updatePokemon(pokemon: Pokemon) {
    this.store.dispatch(new PokemonAction.UpdatePokemon(pokemon));
  }

  deletePokemon(pokemon: Pokemon) {
    this.store.dispatch(new PokemonAction.DeletePokemon(pokemon));
  }
}
