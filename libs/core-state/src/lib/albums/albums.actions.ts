import { Action } from '@ngrx/store';
import { Album } from '@workspace/core-data';

export enum AlbumsActionTypes {
  AlbumSelected = '[ALBUM] Selected Album',
  LoadAlbums = '[ALBUM] Load Albums',
  AlbumsLoaded = '[ALBUM] Albums Loaded',
  CreateAlbum = '[ALBUM] Create Album',
  AlbumCreated = '[ALBUM] Albums Created',
  UpdateAlbum = '[ALBUM] Update Album',
  AlbumUpdated = '[ALBUM] Album Updated',
  DeleteAlbum = '[ALBUM] Delete Album',
  AlbumDeleted = '[ALBUM] Album Deleted'
}

export class AlbumSelected implements Action {
  readonly type = AlbumsActionTypes.AlbumSelected;
  constructor(public payload: number) {}
}

export class LoadAlbums implements Action {
  readonly type = AlbumsActionTypes.LoadAlbums;
  constructor() {}
}

export class AlbumsLoaded implements Action {
  readonly type = AlbumsActionTypes.AlbumsLoaded;
  constructor(public payload: Album[]) {}
}
export class CreateAlbum implements Action {
  readonly type = AlbumsActionTypes.CreateAlbum;
  constructor(public payload: Album) {}
}
export class AlbumCreated implements Action {
  readonly type = AlbumsActionTypes.AlbumCreated;
  constructor(public payload: Album) {}
}
export class UpdateAlbum implements Action {
  readonly type = AlbumsActionTypes.UpdateAlbum;
  constructor(public payload: Album) {}
}
export class AlbumUpdated implements Action {
  readonly type = AlbumsActionTypes.AlbumUpdated;
  constructor(public payload: Album) {}
}
export class DeleteAlbum implements Action {
  readonly type = AlbumsActionTypes.DeleteAlbum;
  constructor(public payload: Album) {}
}
export class AlbumDeleted implements Action {
  readonly type = AlbumsActionTypes.AlbumDeleted;
  constructor(public payload: Album) {}
}

export type AlbumsActions =
  | AlbumSelected
  | LoadAlbums
  | AlbumsLoaded
  | CreateAlbum
  | AlbumCreated
  | UpdateAlbum
  | AlbumUpdated
  | DeleteAlbum
  | AlbumDeleted
  ;
