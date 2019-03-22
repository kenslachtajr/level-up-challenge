import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AlbumsState } from './albums.reducer';
import * as AlbumsAction from './albums.actions';
import { selectAllAlbums, selectLoadingState, selectCurrentAlbum } from '..';
import { Album } from '@workspace/core-data';
import { AlbumsActionTypes } from './albums.actions';

@Injectable({
  providedIn: 'root'
})
export class AlbumsFacade {
  allAlbums$ = this.store.pipe(select(selectAllAlbums));
  currentAlbum$ = this.store.pipe(select(selectCurrentAlbum));
  albumsLoading$ = this.store.pipe(select(selectLoadingState));

  mutations$ = this.actions$
  .pipe(
    filter(action =>
      action.type === AlbumsActionTypes.CreateAlbum
      || action.type === AlbumsActionTypes.UpdateAlbum
      || action.type === AlbumsActionTypes.DeleteAlbum
    )
  );

  constructor(private store: Store<AlbumsState>, private actions$: ActionsSubject) {}

  selectAlbum(id) {
    this.store.dispatch(new AlbumsAction.AlbumSelected(id));
  } 
  
  loadAlbums() {
    this.store.dispatch(new AlbumsAction.LoadAlbums());
  }

  addAlbum(album: Album) {
    this.store.dispatch(new AlbumsAction.CreateAlbum(album));
  } 

  updateAlbum(album: Album) {
    this.store.dispatch(new AlbumsAction.UpdateAlbum(album));
  }

  deleteAlbum(album: Album) {
    this.store.dispatch(new AlbumsAction.DeleteAlbum(album));
  }
}
