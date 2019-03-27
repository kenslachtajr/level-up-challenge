import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { Literature, LiteratureService } from '@workspace/core-data';
import {
  LiteratureActionTypes,
  LiteratureLoaded,
  CreateLiterature,
  UpdateLiterature,
  DeleteLiterature,
  LoadLiterature,
  LiteratureUpdated,
  LiteratureCreated,
  LiteratureDeleted
} from './literature.actions';
import { LiteratureState } from './literature.reducer';

@Injectable({ providedIn: 'root' })
export class LiteratureEffects {
  @Effect()
  loadingLiterature$ = this.dataPersistence.fetch(
    LiteratureActionTypes.LoadLiterature,
    {
      run: (action: LoadLiterature, state: LiteratureState) => {
        return this.literatureService
        .get()
        .pipe(map((res: Literature[]) => new LiteratureLoaded(res))
        );
      },
      onError: (action: LoadLiterature, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  createLiterature$ = this.dataPersistence.pessimisticUpdate(
    LiteratureActionTypes.CreateLiterature,
    {
      run: (action: CreateLiterature, state: LiteratureState) => {
        return this.literatureService
          .create(action.payload)
          .pipe(map((res: Literature) => new LiteratureCreated(res)));
      },

      onError: (action: CreateLiterature, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updateLiterature$ = this.dataPersistence.pessimisticUpdate(
    LiteratureActionTypes.UpdateLiterature,
    {
      run: (action: UpdateLiterature, state: LiteratureState) => {
        return this.literatureService
          .update(action.payload)
          .pipe(map((res: Literature) => new LiteratureUpdated(res)));
      },

      onError: (action: UpdateLiterature, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deleteLiterature$ = this.dataPersistence.pessimisticUpdate(
    LiteratureActionTypes.DeleteLiterature,
    {
      run: (action: DeleteLiterature, state: LiteratureState) => {
        return this.literatureService
          .delete(action.payload.id)
          .pipe(map(_ => new LiteratureDeleted(action.payload)));
      },

      onError: (action: DeleteLiterature, error) => {
        console.error('error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LiteratureState>,
    private literatureService: LiteratureService
  ) {}
}
