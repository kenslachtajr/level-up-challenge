import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromAlbums from './albums/albums.reducer';
import * as fromCities from './cities/cities.reducer';
import * as fromPainters from './painters/painters.reducer';
import * as fromLiterature from './literature/literature.reducer';

import { Album } from '@workspace/core-data';
import { City } from '@workspace/core-data';
import { Painter } from '@workspace/core-data';
import { Literature } from '@workspace/core-data';

export interface AppState {
  albums: fromAlbums.AlbumsState;
  cities: fromCities.CitiesState;
  painters: fromPainters.PaintersState;
  literature: fromLiterature.LiteratureState;
}

export const reducers: ActionReducerMap<AppState> = {
  albums: fromAlbums.albumsReducer,
  cities: fromCities.citiesReducer,
  painters: fromPainters.paintersReducer,
  literature: fromLiterature.literatureReducer
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

export const selectCitiesState = createFeatureSelector<fromCities.CitiesState>(
  'cities'
);

export const selectCityIds = createSelector(
  selectCitiesState,
  fromCities.selectedCityIds
);

export const selectCityEntities = createSelector(
  selectCitiesState,
  fromCities.selectCityEntities
);

export const selectAllCities = createSelector(
  selectCitiesState,
  fromCities.selectAllCities
);

export const selectCurrentCityId = createSelector(
  selectCitiesState,
  fromCities.getSelectedCityId
);

export const emptyCity: City = {
  id: null,
  name: '',
  state: '',
  population: null,
  nickname: ''
};

export const selectCurrentCity = createSelector(
  selectCityEntities,
  selectCurrentCityId,
  (cityEntities, cityId) => {
    return cityId ? cityEntities[cityId] : emptyCity;
  }
);

export const selectCityLoadingState = createSelector(
  selectCitiesState,
  state => state.loading
);

//painters selectors

export const selectPaintersState = createFeatureSelector<
  fromPainters.PaintersState
>('painters');

export const selectPainterIds = createSelector(
  selectPaintersState,
  fromPainters.selectedPainterIds
);

export const selectPainterEntities = createSelector(
  selectPaintersState,
  fromPainters.selectPainterEntities
);

export const selectAllPainters = createSelector(
  selectPaintersState,
  fromPainters.selectAllPainters
);

export const selectCurrentPainterId = createSelector(
  selectPaintersState,
  fromPainters.getSelectedPainterId
);

export const emptyPainter: Painter = {
  id: null,
  name: '',
  era: '',
  yearsLived: null,
  datesLived: null,
  work: ''
};
export const selectCurrentPainter = createSelector(
  selectPainterEntities,
  selectCurrentPainterId,
  (painterEntities, painterId) => {
    return painterId ? painterEntities[painterId] : emptyPainter;
  }
);

export const selectPainterLoadingState = createSelector(
  selectPaintersState,
  state => state.loading
);

//literature selectors

export const selectLiteratureState = createFeatureSelector<
  fromLiterature.LiteratureState
>('literature');

export const selectLiteratureIds = createSelector(
  selectLiteratureState,
  fromLiterature.selectedLiteratureIds
);

export const selectLiteratureEntities = createSelector(
  selectLiteratureState,
  fromLiterature.selectLiteratureEntities
);

export const selectAllLiterature = createSelector(
  selectLiteratureState,
  fromLiterature.selectAllLiterature
);

export const selectCurrentLiteratureId = createSelector(
  selectLiteratureState,
  fromLiterature.getSelectedLiteratureId
);

export const emptyLiterature: Literature = {
  id: null,
  author: '',
  work: '',
  era: '',
  lived: null
};

export const selectCurrentLiterature = createSelector(
  selectLiteratureEntities,
  selectCurrentLiteratureId,
  (literatureEntities, literatureId) => {
    return literatureId ? literatureEntities[literatureId] : emptyLiterature;
  }
);

export const selectLiteratureLoadingState = createSelector(
  selectLiteratureState,
  state => state.loading
);
