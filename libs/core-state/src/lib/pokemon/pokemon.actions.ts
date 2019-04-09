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

export class LoadPokemon implements Action {
    readonly type = PokemonActionTypes.LoadPokemon;
    constructor() {}
}

export class PokemonLoaded implements Action {
    readonly type = PokemonActionTypes.PokemonLoaded;
    constructor(public payload: Pokemon[]) {}
}

export class CreatePokemon implements Action {
    readonly type = PokemonActionTypes.CreatePokemon;
    constructor(public payload: Pokemon) {}
}

export class PokemonCreated implements Action {
    readonly type = PokemonActionTypes.PokemonCreated;
    constructor(public payload: Pokemon) {}
}

export class UpdatePokemon implements Action {
    readonly type = PokemonActionTypes.UpdatePokemon;
    constructor(public payload: Pokemon) {}
}

export class PokemonUpdated implements Action {
    readonly type = PokemonActionTypes.PokemonUpdated;
    constructor(public payload: Pokemon) {}
}

export class DeletePokemon implements Action {
    readonly type = PokemonActionTypes.DeletePokemon;
    constructor(public payload: Pokemon) {}
}

export class PokemonDeleted implements Action {
    readonly type = PokemonActionTypes.PokemonDeleted;
    constructor(public payload: Pokemon) {}
}

export type PokemonActions = 
| PokemonSelected
| LoadPokemon
| PokemonLoaded
| CreatePokemon
| PokemonCreated
| UpdatePokemon
| PokemonUpdated
| DeletePokemon
| PokemonDeleted;

