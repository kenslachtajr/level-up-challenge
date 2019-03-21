import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Album } from '@workspace/core-data';

import { AlbumsActions, AlbumsActionTypes } from './albums.actions';
import { State } from '@ngrx/store';

export interface AlbumsState extends EntityState<Album> {
  selectedAlbumId: number | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Album> = createEntityAdapter<Album>();
export const initialState: AlbumsState = adapter.getInitialState({
  selectedAlbumId: null,
  loading: false
});

export function albumsReducer(
  state = initialState,
  action: AlbumsActions
): AlbumsState {
  switch (action.type) {
    case AlbumsActionTypes.AlbumSelected: {
      return Object.assign({}, state, { selectedAlbumId: action.payload });
    }
    case AlbumsActionTypes.LoadAlbums: {
      return {
        ...state,
        loading: true
      };
    }
    case AlbumsActionTypes.AlbumsLoaded: {
      return adapter.addAll(action.payload, { ...state, loading: false });
    }
    default:
      return state;
  }
  case
}

export const getSelectedAlbumId = (state: AlbumsState) => state.selectedAlbumId;

//Simple selectors
export const {
  selectIds: selectedAlbumIds,
  selectEntities: selectAlbumEntities,
  selectAll: selectAllAlbums,
  selectTotal: selectAlbumTotal
} = adapter.getSelectors();
