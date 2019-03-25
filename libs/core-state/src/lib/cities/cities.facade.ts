import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { CitiesState } from './cities.reducer';
import * as CitiesAction from './cities.actions';
import { selectAllCities, selectCityLoadingState, selectCurrentCity } from '..';
import { City } from '@workspace/core-data';
import { CitiesActionTypes } from './cities.actions';

@Injectable({
  providedIn: 'root'
})
export class CitiesFacade {
  allCities$ = this.store.pipe(select(selectAllCities));
  currentCity$ = this.store.pipe(select(selectCurrentCity));
  citiesLoading$ = this.store.pipe(select(selectCityLoadingState));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === CitiesActionTypes.CreateCity ||
        action.type === CitiesActionTypes.UpdateCity ||
        action.type === CitiesActionTypes.DeleteCity
    )
  );

  constructor(
    private store: Store<CitiesState>,
    private actions$: ActionsSubject
  ) {}

  selectCity(id) {
    this.store.dispatch(new CitiesAction.CitySelected(id));
  }

  loadCities() {
    this.store.dispatch(new CitiesAction.LoadCities());
  }

  addCity(city: City) {
    this.store.dispatch(new CitiesAction.CreateCity(city));
  }

  updateCity(city: City) {
    this.store.dispatch(new CitiesAction.UpdateCity(city));
  }

  deleteCity(city: City) {
    this.store.dispatch(new CitiesAction.DeleteCity(city));
  }
}
