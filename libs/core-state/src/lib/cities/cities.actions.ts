import { Action } from '@ngrx/store';
import { City } from '@workspace/core-data';

export enum CitiesActionTypes {
  CitySelected = '[CITY] Selected City',
  LoadCities = '[CITY] Load Cities',
  CitiesLoaded = '[CITY] Cities Loaded',
  CreateCity = '[CITY] Create City',
  CityCreated = '[CITY] City Created',
  UpdateCity = '[CITY] Update City',
  CityUpdated = '[CITY] City Updated',
  DeleteCity = '[CITY] Delete City',
  CityDeleted = '[CITY] City Deleted'
}

export class CitySelected implements Action {
  readonly type = CitiesActionTypes.CitySelected;
  constructor(public payload: number) {}
}

export class LoadCities implements Action {
  readonly type = CitiesActionTypes.LoadCities;
  constructor() {}
}

export class CitiesLoaded implements Action {
  readonly type = CitiesActionTypes.CitiesLoaded;
  constructor(public payload: City[]) {}
}

export class CreateCity implements Action {
  readonly type = CitiesActionTypes.CreateCity;
  constructor(public payload: City) {}
}

export class CityCreated implements Action {
  readonly type = CitiesActionTypes.CityCreated;
  constructor(public payload: City) {}
}

export class UpdateCity implements Action {
  readonly type = CitiesActionTypes.UpdateCity;
  constructor(public payload: City) {}
}

export class CityUpdated implements Action {
  readonly type = CitiesActionTypes.CityUpdated;
  constructor(public payload: City) {}
}

export class DeleteCity implements Action {
  readonly type = CitiesActionTypes.DeleteCity;
  constructor(public payload: City) {}
}

export class CityDeleted implements Action {
  readonly type = CitiesActionTypes.CityDeleted;
  constructor(public payload: City) {}
}

export type CitiesActions =
  | CitySelected
  | LoadCities
  | CitiesLoaded
  | CreateCity
  | CityCreated
  | UpdateCity
  | CityUpdated
  | DeleteCity
  | CityDeleted;
