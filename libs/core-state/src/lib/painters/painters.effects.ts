import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';

import { Painter, PaintersService } from '@workspace/core-data';
import {
  PaintersActionTypes,
  PaintersLoaded,
  CreatePainter,
  UpdatePainter,
  DeletePainter,
  LoadPainters,
  PainterUpdated,
  PainterCreated,
  PainterDeleted
} from './painters.actions';
import { PaintersState } from './painters.reducer';

@Injectable({ providedIn: 'root' })
export class PaintersEffects {
  @Effect()
  loadingPainters$ = this.dataPersistence.fetch(
    PaintersActionTypes.LoadPainters,
    {
      run: (action: LoadPainters, state: PaintersState) => {
        return this.paintersService
          .get()
          .pipe(map((res: Painter[]) => new PaintersLoaded(res)));
      },

      onError: (action: LoadPainters, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  createPainter$ = this.dataPersistence.pessimisticUpdate(
    PaintersActionTypes.CreatePainter,
    {
      run: (action: CreatePainter, state: PaintersState) => {
        return this.paintersService
          .create(action.payload)
          .pipe(map((res: Painter) => new PainterCreated(res)));
      },

      onError: (action: CreatePainter, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updatePainter$ = this.dataPersistence.pessimisticUpdate(
    PaintersActionTypes.UpdatePainter,
    {
      run: (action: UpdatePainter, state: PaintersState) => {
        return this.paintersService
          .update(action.payload)
          .pipe(map((res: Painter) => new PainterUpdated(res)));
      },

      onError: (action: UpdatePainter, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deletePainter$ = this.dataPersistence.pessimisticUpdate(
    PaintersActionTypes.DeletePainter,
    {
      run: (action: DeletePainter, state: PaintersState) => {
        return this.paintersService
          .delete(action.payload.id)
          .pipe(map(_ => new PainterDeleted(action.payload)));
      },

      onError: (action: DeletePainter, error) => {
        console.error('error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PaintersState>,
    private paintersService: PaintersService
  ) {}
}
