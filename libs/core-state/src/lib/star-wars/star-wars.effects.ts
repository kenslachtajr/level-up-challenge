import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { StarWars, StarWarsService } from '@workspace/core-data';
import {
  StarWarsActionTypes,
  StarWarsLoaded,
  CreateStarWars,
  UpdateStarWars,
  DeleteStarWars,
  LoadStarWars,
  StarWarsUpdated,
  StarWarsCreated,
  StarWarsDeleted
} from './star-wars.actions';
import { StarWarsState } from './star-wars.reducer';

@Injectable({ providedIn: 'root' })
export class StarWarsEffects {
  @Effect()
  loadingStarWars$ = this.dataPersistence.fetch(
    StarWarsActionTypes.LoadStarWars,
    {
      run: (action: LoadStarWars, state: StarWarsState) => {
        return this.starWarsService
          .get()
          .pipe(map((res: StarWars[]) => new StarWarsLoaded(res)));
      },
      onError: (action: LoadStarWars, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  createStarWars$ = this.dataPersistence.pessimisticUpdate(
    StarWarsActionTypes.CreateStarWars,
    {
      run: (action: CreateStarWars, state: StarWarsState) => {
        return this.starWarsService
          .create(action.payload)
          .pipe(map((res: StarWars) => new StarWarsCreated(res)));
      },

      onError: (action: CreateStarWars, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updateStarWars$ = this.dataPersistence.pessimisticUpdate(
    StarWarsActionTypes.UpdateStarWars,
    {
      run: (action: UpdateStarWars, state: StarWarsState) => {
        return this.starWarsService
          .update(action.payload)
          .pipe(map((res: StarWars) => new StarWarsUpdated(res)));
      },

      onError: (action: UpdateStarWars, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deleteStarWars$ = this.dataPersistence.pessimisticUpdate(
    StarWarsActionTypes.DeleteStarWars,
    {
      run: (action: DeleteStarWars, state: StarWarsState) => {
        return this.starWarsService
          .delete(action.payload.id)
          .pipe(map(_ => new StarWarsDeleted(action.payload)));
      },

      onError: (action: DeleteStarWars, error) => {
        console.log('error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<StarWarsState>,
    private starWarsService: StarWarsService
  ) {}
}
