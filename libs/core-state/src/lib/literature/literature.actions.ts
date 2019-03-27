import { Action } from '@ngrx/store';
import { Literature } from '@workspace/core-data';

export enum LiteratureActionTypes {
    LiteratureSelected = '[LITERATURE] Selected Literature',
    LoadLiterature = '[LITERATURE] Load Literature',
    LiteratureLoaded = '[LITERATURE] Literature Loaded',
    CreateLiterature = '[LITERATURE] Create Literature',
    LiteratureCreated = '[LITERATURE] Literature Created',
    UpdateLiterature = '[LITERATURE] Update Literature',
    LiteratureUpdated = '[LITERATURE] Literature Updated',
    DeleteLiterature = '[LITERATURE] Delete Literature',
    LiteratureDeleted = '[LITERATURE] Literature Deleted'
}

export class LiteratureSelected implements Action {
    readonly type = LiteratureActionTypes.LiteratureSelected;
    constructor(public payload: number) {}
}

export class LoadLiterature implements Action {
    readonly type = LiteratureActionTypes.LoadLiterature;
    constructor() {}
}

export class LiteratureLoaded implements Action {
    readonly type = LiteratureActionTypes.LiteratureLoaded;
    constructor(public payload: Literature[]) {}
}

export class CreateLiterature implements Action {
    readonly type = LiteratureActionTypes.CreateLiterature;
    constructor(public payload: Literature) {}
}

export class LiteratureCreated implements Action {
    readonly type = LiteratureActionTypes.LiteratureCreated;
    constructor(public payload: Literature) {}
}

export class UpdateLiterature implements Action {
    readonly type = LiteratureActionTypes.UpdateLiterature;
    constructor(public payload: Literature) {}
}

export class LiteratureUpdated implements Action {
    readonly type = LiteratureActionTypes.LiteratureUpdated;
    constructor(public payload: Literature) {}
}

export class DeleteLiterature implements Action {
    readonly type = LiteratureActionTypes.DeleteLiterature;
    constructor(public payload: Literature) {}
}

export class LiteratureDeleted implements Action {
    readonly type = LiteratureActionTypes.LiteratureDeleted;
    constructor(public payload: Literature) {}
}

export type LiteratureActions = 
| LiteratureSelected
| LoadLiterature
| LiteratureLoaded
| CreateLiterature
| LiteratureCreated
| UpdateLiterature
| LiteratureUpdated
| DeleteLiterature
| LiteratureDeleted;