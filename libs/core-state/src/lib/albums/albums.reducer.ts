import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Album } from '@workspace/core-data';

import { AlbumsActions, AlbumsActionTypes } from './albums.actions';

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

    case AlbumsActionTypes.CreateAlbum: {
      return {
        ...state,
        loading: true
      };
    }

    case AlbumsActionTypes.AlbumCreated: {
      return adapter.addOne(action.payload, {...state, loading: false});
    }

    case AlbumsActionTypes.UpdateAlbum: {
      return {
        ...state,
        loading: true
      };
    }

    case AlbumsActionTypes.AlbumUpdated: {
      return adapter.upsertOne(action.payload, {...state, loading: false});
    }

    case AlbumsActionTypes.DeleteAlbum: {
      return {
        ...state,
        loading: true
      };
    }

    case AlbumsActionTypes.AlbumDeleted: {
      return adapter.removeOne(action.payload.id, {...state, loading: false});
    }

    default:
      return state;
  }
}

export const getSelectedAlbumId = (state: AlbumsState) => state.selectedAlbumId;

export const {
  selectIds: selectedAlbumIds,
  selectEntities: selectAlbumEntities,
  selectAll: selectAllAlbums,
  selectTotal: selectAlbumTotal
} = adapter.getSelectors();
