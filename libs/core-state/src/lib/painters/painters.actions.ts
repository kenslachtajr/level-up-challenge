import { Action } from '@ngrx/store';
import { Painter } from '@workspace/core-data';

export enum PaintersActionTypes {
  PainterSelected = '[PAINTER] Selected Painter',
  LoadPainters = '[PAINTER] Load Painters',
  PaintersLoaded = '[PAINTER] Painters Loaded',
  CreatePainter = '[PAINTER] Create Painter',
  PainterCreated = '[PAINTER] Painter Created',
  UpdatePainter = '[PAINTER] Update Painter',
  PainterUpdated = '[PAINTER] Painter Updated',
  DeletePainter = '[PAINTER] Delete Painter',
  PainterDeleted = '[PAINTER] Painter Deleted'
}

export class PainterSelected implements Action {
  readonly type = PaintersActionTypes.PainterSelected;
  constructor(public payload: number) {}
}

export class LoadPainters implements Action {
  readonly type = PaintersActionTypes.LoadPainters;
  constructor() {}
}

export class PaintersLoaded implements Action {
  readonly type = PaintersActionTypes.PaintersLoaded;
  constructor(public payload: Painter[]) {}
}

export class CreatePainter implements Action {
  readonly type = PaintersActionTypes.CreatePainter;
  constructor(public payload: Painter) {}
}

export class PainterCreated implements Action {
  readonly type = PaintersActionTypes.PainterCreated;
  constructor(public payload: Painter) {}
}

export class UpdatePainter implements Action {
  readonly type = PaintersActionTypes.UpdatePainter;
  constructor(public payload: Painter) {}
}

export class PainterUpdated implements Action {
  readonly type = PaintersActionTypes.PainterUpdated;
  constructor(public payload: Painter) {}
}

export class DeletePainter implements Action {
  readonly type = PaintersActionTypes.DeletePainter;
  constructor(public payload: Painter) {}
}

export class PainterDeleted implements Action {
  readonly type = PaintersActionTypes.PainterDeleted;
  constructor(public payload: Painter) {}
}

export type PaintersActions =
  | PainterSelected
  | LoadPainters
  | PaintersLoaded
  | CreatePainter
  | PainterCreated
  | UpdatePainter
  | PainterUpdated
  | DeletePainter
  | PainterDeleted;
