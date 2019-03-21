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

export const selectAllAlbums = createSelector(
    selectAlbumsState,
    fromAlbums.selectAllAlbums
);

export const selectLoadingState = createSelector(
    selectAlbumsState,
    (state) => state.loading,
);