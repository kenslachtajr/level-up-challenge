import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AlbumsState } from './albums.reducer';
import * as AlbumsAction from './albums.actions';
import { selectAllAlbums, selectLoadingState } from '..';

@Injectable({
  providedIn: 'root'
})
export class AlbumsFacade {
  allAlbums$ = this.store.pipe(select(selectAllAlbums));
  albumsLoading$ = this.store.pipe(select(selectLoadingState));
  constructor(private store: Store<AlbumsState>) {}

  loadAlbums() {
    this.store.dispatch(new AlbumsAction.LoadAlbums());
  }
}
