import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { PaintersState } from './painters.reducer';
import * as PaintersAction from './painters.actions';
import {
  selectAllPainters,
  selectPainterLoadingState,
  selectCurrentPainter
} from '..';
import { Painter } from '@workspace/core-data';
import { PaintersActionTypes } from './painters.actions';

@Injectable({
  providedIn: 'root'
})
export class PaintersFacade {
  allPainters$ = this.store.pipe(select(selectAllPainters));
  currentPainter$ = this.store.pipe(select(selectCurrentPainter));
  paintersLoading$ = this.store.pipe(select(selectPainterLoadingState));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === PaintersActionTypes.CreatePainter ||
        action.type === PaintersActionTypes.UpdatePainter ||
        action.type === PaintersActionTypes.DeletePainter
    )
  );

  constructor(
    private store: Store<PaintersState>,
    private actions$: ActionsSubject
  ) {}

  selectPainter(id) {
    this.store.dispatch(new PaintersAction.PainterSelected(id));
  }

  loadPainters() {
    this.store.dispatch(new PaintersAction.LoadPainters());
  }

  addPainter(painter: Painter) {
    this.store.dispatch(new PaintersAction.CreatePainter(painter));
  }

  updatePainter(painter: Painter) {
    this.store.dispatch(new PaintersAction.UpdatePainter(painter));
  }

  deletePainter(painter: Painter) {
    this.store.dispatch(new PaintersAction.DeletePainter(painter));
  }
}
