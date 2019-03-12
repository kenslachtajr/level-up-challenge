import { Action } from '@ngrx/store';
import { Album } from '@workspace/core-data';

export enum AlbumsActionTypes {
    LoadAlbums = '[ALBUM] Load Albums',
    AlbumsLoaded = '[ALBUM] Albums Loaded'
}

export class LoadAlbums implements Action {
    readonly type = AlbumsActionTypes.LoadAlbums;
    constructor() { }
}

export class AlbumsLoaded implements Action {
    readonly type = AlbumsActionTypes.AlbumsLoaded;
    constructor(public payload: Album[]) { }
}

export type AlbumsActions = LoadAlbums
| AlbumsLoaded;