import { Action } from '@ngrx/store';
import { Pokemon } from '@workspace/core-data';

export enum PokemonActionTypes {
    PokemonSelected = '[POKEMON] Selected Pokemon',
    LoadPokemon = '[POKEMON] Load Pokemon',
    PokemonLoaded = '[POKEMON] Pokemon Loaded',
    CreatePokemon = '[POKEMON] Create Pokemon',
    PokemonCreated = '[POKEMON] Pokemon Created',
    UpdatePokemon = '[POKEMON] Update Pokemon',
    PokemonUpdated = '[POKEMON] Pokemon Updated',
    DeletePokemon = '[POKEMON] Delete Pokemon',
    PokemonDeleted = '[POKEMON] Pokemon Deleted',
}

export class PokemonSelected implements Action {
    readonly type = PokemonActionTypes.PokemonSelected;
    constructor(public payload: number) {}
}

