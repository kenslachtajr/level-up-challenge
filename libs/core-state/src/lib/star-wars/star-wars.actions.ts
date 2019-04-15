import {Action} from '@ngrx/store';
import { StarWars } from '@workspace/core-data';

export enum StarWarsActionTypes {
    StarWarsSelected = '[STARWARS] Selected StarWars',
    LoadStarWars = '[STARWARS] Load StarWars',
    StarWarsLoaded = '[STARWARS] StarWars Loaded',
    CreateStarWars = '[STARWARS] Create StarWars',
    StarWarsCreated = '[STARWARS] StarWars Created',
    UpdateStarWars = '[STARWARS] Update StarWars',
    StarWarsUpdated = '[STARWARS] StarWars Updated',
    DeleteStarWars = '[STARWARS] Delete StarWars',
    StarWarsDeleted = '[STARWARS] StarWars Deleted',
}

export class StarWarsSelected implements Action {
    readonly type = StarWarsActionTypes.StarWarsSelected;
    constructor(public payload: number) {}
}

export class LoadStarWars implements Action {
    readonly type = StarWarsActionTypes.LoadStarWars;
    constructor() {}
}

export class StarWarsLoaded implements Action {
    readonly type = StarWarsActionTypes.StarWarsLoaded;
    constructor(public payload: StarWars[]) {}
}

export class CreateStarWars implements Action {
    readonly type = StarWarsActionTypes.CreateStarWars;
    constructor(public payload: StarWars) {}
}

export class StarWarsCreated implements Action {
    readonly type = StarWarsActionTypes.StarWarsCreated;
    constructor(public payload: StarWars) {}
}

export class UpdateStarWars implements Action {
    readonly type = StarWarsActionTypes.UpdateStarWars;
    constructor(public payload: StarWars) {}
}

export class StarWarsUpdated implements Action {
    readonly type = StarWarsActionTypes.StarWarsUpdated;
    constructor(public payload: StarWars) {}
}

export class DeleteStarWars implements Action {
    readonly type = StarWarsActionTypes.DeleteStarWars;
    constructor(public payload: StarWars) {}
}

export class StarWarsDeleted implements Action {
    readonly type = StarWarsActionTypes.StarWarsDeleted;
    constructor(public payload: StarWars) {}
}

export type StarWarsActions = 
| StarWarsSelected
| LoadStarWars
| StarWarsLoaded
| CreateStarWars
| StarWarsCreated
| UpdateStarWars
| StarWarsUpdated
| DeleteStarWars
| StarWarsDeleted;