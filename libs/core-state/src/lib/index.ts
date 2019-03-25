import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromAlbums from './albums/albums.reducer';
import * as fromCities from './cities/cities.reducer';

import { Album } from '@workspace/core-data';
import { City } from '@workspace/core-data';

export interface AppState {
  albums: fromAlbums.AlbumsState;
  cities: fromCities.CitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  albums: fromAlbums.albumsReducer,
  cities: fromCities.citiesReducer
};

// -------------------------------------------------------------------
// ALBUMS SELECTORS
// -------------------------------------------------------------------

export const selectAlbumsState = createFeatureSelector<fromAlbums.AlbumsState>(
  'albums'
);

export const selectAlbumIds = createSelector(
  selectAlbumsState,
  fromAlbums.selectedAlbumIds
);

export const selectAlbumEntities = createSelector(
  selectAlbumsState,
  fromAlbums.selectAlbumEntities
);

export const selectAllAlbums = createSelector(
  selectAlbumsState,
  fromAlbums.selectAllAlbums
);

export const selectCurrentAlbumId = createSelector(
  selectAlbumsState,
  fromAlbums.getSelectedAlbumId
);

export const emptyAlbum: Album = {
  id: null,
  title: '',
  artist: '',
  year: null,
  label: ''
};

export const selectCurrentAlbum = createSelector(
  selectAlbumEntities,
  selectCurrentAlbumId,
  (albumEntities, albumId) => {
    return albumId ? albumEntities[albumId] : emptyAlbum;
  }
);

export const selectAlbumLoadingState = createSelector(
  selectAlbumsState,
  state => state.loading
);

// cities selectors

  export const selectCitiesState = createFeatureSelector<fromCities.CitiesState>('cities');

  export const selectCityIds = createSelector(
    selectCitiesState,
    fromCities.selectedCityIds
  );

  export const selectCityEntities = createSelector(
    selectCitiesState,
    fromCities.selectCityEntities
  )

  export const selectAllCities = createSelector(
      selectCitiesState,
      fromCities.selectAllCities
  );

  export const selectCurrentCityId = createSelector(
    selectCitiesState,
    fromCities.getSelectedCityId
  )

  export const emptyCity: City = {id: null, name: '', state: '', population: null, nickname: ''};

  export const selectCurrentCity = createSelector(
    selectCityEntities,
    selectCurrentCityId,
    (cityEntities, cityId) => {
      return cityId ? cityEntities[cityId] : emptyCity;
    }
  )

  export const selectCityLoadingState = createSelector(
      selectCitiesState,
      (state) => state.loading,
  );