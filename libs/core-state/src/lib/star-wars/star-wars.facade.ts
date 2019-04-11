import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { StarWarsState } from './star-wars.reducer';
import * as StarWarsAction from './star-wars.actions';
import {
  selectAllStarWars,
  selectStarWarsLoadingState,
  selectCurrentStarWars
} from '..';
import { StarWars } from '@workspace/core-data';
import { StarWarsActionTypes } from './star-wars.actions';

@Injectable({
  providedIn: 'root'
})
export class StarWarsFacade {
  allStarWars$ = this.store.pipe(select(selectAllStarWars));
  currentStarWars$ = this.store.pipe(select(selectCurrentStarWars));
  starWarsLoading$ = this.store.pipe(select(selectStarWarsLoadingState));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === StarWarsActionTypes.CreateStarWars ||
        action.type === StarWarsActionTypes.UpdateStarWars ||
        action.type === StarWarsActionTypes.DeleteStarWars
    )
  );

  constructor(
    private store: Store<StarWarsState>,
    private actions$: ActionsSubject
  ) {}

  selectStarWars(id) {
    this.store.dispatch(new StarWarsAction.StarWarsSelected(id));
  }

  loadStarWars() {
    this.store.dispatch(new StarWarsAction.LoadStarWars());
  }

  addStarWars(starWars: StarWars) {
    this.store.dispatch(new StarWarsAction.CreateStarWars(starWars));
  }

  updateStarWars(starWars: StarWars) {
    this.store.dispatch(new StarWarsAction.UpdateStarWars(starWars));
  }

  deleteStarWars(starWars: StarWars) {
    this.store.dispatch(new StarWarsAction.DeleteStarWars(starWars));
  }
}
