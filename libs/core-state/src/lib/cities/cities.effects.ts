import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { City, CitiesService } from '@workspace/core-data';
import {
  CitiesActionTypes,
  CitiesLoaded,
  CreateCity,
  UpdateCity,
  DeleteCity,
  LoadCities,
  CityUpdated,
  CityCreated,
  CityDeleted
} from './cities.actions';
import { CitiesState } from './cities.reducer';

@Injectable({ providedIn: 'root' })
export class CitiesEffects {
  @Effect()
  loadCities$ = this.dataPersistence.fetch(CitiesActionTypes.LoadCities, {
    run: (action: LoadCities, state: CitiesState) => {
      return this.citiesService
        .get()
        .pipe(map((res: City[]) => new CitiesLoaded(res)));
    },

    onError: (action: LoadCities, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  createCity$ = this.dataPersistence.pessimisticUpdate(
    CitiesActionTypes.CreateCity,
    {
      run: (action: CreateCity, state: CitiesState) => {
        return this.citiesService
          .create(action.payload)
          .pipe(map((res: City) => new CityCreated(res)));
      },

      onError: (action: CreateCity, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updateCity$ = this.dataPersistence.pessimisticUpdate(
    CitiesActionTypes.UpdateCity,
    {
      run: (action: UpdateCity, state: CitiesState) => {
        return this.citiesService
          .update(action.payload)
          .pipe(map((res: City) => new CityUpdated(res)));
      },

      onError: (action: UpdateCity, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deleteCity$ = this.dataPersistence.pessimisticUpdate(
    CitiesActionTypes.DeleteCity,
    {
      run: (action: DeleteCity, state: CitiesState) => {
        return this.citiesService
          .delete(action.payload.id)
          .pipe(map(_ => new CityDeleted(action.payload)));
      },

      onError: (action: DeleteCity, error) => {
        console.error('error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CitiesState>,
    private citiesService: CitiesService
  ) {}
}
