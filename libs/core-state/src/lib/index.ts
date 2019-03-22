import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromAlbums from './albums/albums.reducer';

import { Album } from '@workspace/core-data';

export interface AppState {
albums: fromAlbums.AlbumsState,
}

export const reducers: ActionReducerMap<AppState> = {
albums : fromAlbums.albumsReducer
}

// -------------------------------------------------------------------
// ALBUMS SELECTORS
// -------------------------------------------------------------------

export const selectAlbumsState = createFeatureSelector<fromAlbums.AlbumsState>('albums');

export const selectAlbumIds = createSelector(
  selectAlbumsState,
  fromAlbums.selectedAlbumIds
);

export const selectAlbumEntities = createSelector(
  selectAlbumsState,
  fromAlbums.selectAlbumEntities
)

export const selectAllAlbums = createSelector(
    selectAlbumsState,
    fromAlbums.selectAllAlbums
);

export const selectCurrentAlbumId = createSelector(
  selectAlbumsState,
  fromAlbums.getSelectedAlbumId
)

export const emptyAlbum: Album = {id: null, title: '', artist: '', year: null, label: ''};

export const selectCurrentAlbum = createSelector(
  selectAlbumEntities,
  selectCurrentAlbumId,
  (albumEntities, albumId) => {
    return albumId ? albumEntities[albumId] : emptyAlbum;
  }
)

export const selectLoadingState = createSelector(
    selectAlbumsState,
    (state) => state.loading,
);