import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { LiteratureState } from './literature.reducer';
import * as LiteratureAction from './literature.actions';
import {
  selectAllLiterature,
  selectLiteratureLoadingState,
  selectCurrentLiterature
} from '..';
import { Literature } from '@workspace/core-data';
import { LiteratureActionTypes } from './literature.actions';

@Injectable({
  providedIn: 'root'
})
export class LiteratureFacade {
  allLiterature$ = this.store.pipe(select(selectAllLiterature));
  currentLiterature$ = this.store.pipe(select(selectCurrentLiterature));
  literatureLoading$ = this.store.pipe(select(selectLiteratureLoadingState));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === LiteratureActionTypes.CreateLiterature ||
        action.type === LiteratureActionTypes.UpdateLiterature ||
        action.type === LiteratureActionTypes.DeleteLiterature
    )
  );

  constructor(
    private store: Store<LiteratureState>,
    private actions$: ActionsSubject
  ) {}

  selectLiterature(id) {
    this.store.dispatch(new LiteratureAction.LiteratureSelected(id));
  }

  loadLiterature() {
    this.store.dispatch(new LiteratureAction.LoadLiterature());
  }

  addLiterature(literature: Literature) {
    this.store.dispatch(new LiteratureAction.CreateLiterature(literature));
  }

  updateLiterature(literature: Literature) {
    this.store.dispatch(new LiteratureAction.UpdateLiterature(literature));
  }

  deleteLiterature(literature: Literature) {
    this.store.dispatch(new LiteratureAction.DeleteLiterature(literature));
  }
}
