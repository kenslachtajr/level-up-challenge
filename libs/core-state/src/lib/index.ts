import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromAlbums from './albums/albums.reducer';
import * as fromCities from './cities/cities.reducer';
import * as fromPainters from './painters/painters.reducer';
import * as fromLiterature from './literature/literature.reducer';
import * as fromPokemon from './pokemon/pokemon.reducer';
import * as fromStarWars from './star-wars/star-wars.reducer';

import { Album } from '@workspace/core-data';
import { City } from '@workspace/core-data';
import { Painter } from '@workspace/core-data';
import { Literature } from '@workspace/core-data';
import { Pokemon } from '@workspace/core-data';
import { StarWars } from '@workspace/core-data';

export interface AppState {
  albums: fromAlbums.AlbumsState;
  cities: fromCities.CitiesState;
  painters: fromPainters.PaintersState;
  literature: fromLiterature.LiteratureState;
  pokemon: fromPokemon.PokemonState;
  starWars: fromStarWars.StarWarsState;
}

export const reducers: ActionReducerMap<AppState> = {
  albums: fromAlbums.albumsReducer,
  cities: fromCities.citiesReducer,
  painters: fromPainters.paintersReducer,
  literature: fromLiterature.literatureReducer,
  pokemon: fromPokemon.pokemonReducer,
  starWars: fromStarWars.starWarsReducer
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

//pokemon selectors

export const selectPokemonState = createFeatureSelector<
  fromPokemon.PokemonState
>('pokemon');

export const selectPokemonIds = createSelector(
  selectPokemonState,
  fromPokemon.selectedPokemonIds
);

export const selectPokemonEntities = createSelector(
  selectPokemonState,
  fromPokemon.selectPokemonEntities
);

export const selectAllPokemon = createSelector(
  selectPokemonState,
  fromPokemon.selectAllPokemon
);

export const selectCurrentPokemonId = createSelector(
  selectPokemonState,
  fromPokemon.getSelectedPokemonId
);

export const emptyPokemon: Pokemon = {
  id: null,
  name: '',
  url: '',
  base_experience: null,
  height: null,
  weight: null
};

export const selectCurrentPokemon = createSelector(
  selectPokemonEntities,
  selectCurrentPokemonId,
  (pokemonEntities, pokemonId) => {
    return pokemonId ? pokemonEntities[pokemonId] : emptyPokemon;
  }
);

export const selectPokemonLoadingState = createSelector(
  selectPokemonState,
  state => state.loading
);

//star wars selectors

export const selectStarWarsState = createFeatureSelector<
  fromStarWars.StarWarsState
>('starWars');

export const selectStarWarsIds = createSelector(
  selectStarWarsState,
  fromStarWars.selectedStarWarsIds
);

export const selectStarWarsEntities = createSelector(
  selectStarWarsState,
  fromStarWars.selectStarWarsEntities
);

export const selectAllStarWars = createSelector(
  selectStarWarsState,
  fromStarWars.selectAllStarWars
);

export const selectCurrentStarWarsId = createSelector(
  selectStarWarsState,
  fromStarWars.getSelectedStarWarsId
);

export const emptyStarWars: StarWars = {
  id: null,
    name: '',
    gender: '',
    height: null,
    mass: null,
    eye_color: '',
    skin_color: '',
    birth_year: '',
    url: ''
};

export const selectCurrentStarWars = createSelector(
  selectStarWarsEntities,
  selectCurrentStarWarsId,
  (starWarsEntities, starWarsId) => {
    return starWarsId ? starWarsEntities[starWarsId] : emptyStarWars;
  }
);

export const selectStarWarsLoadingState = createSelector(
  selectStarWarsState,
  state => state.loading
);
