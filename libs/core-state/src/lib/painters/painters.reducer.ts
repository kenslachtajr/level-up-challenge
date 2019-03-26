import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Painter } from '@workspace/core-data';

import { PaintersActions, PaintersActionTypes } from './painters.actions';

export interface PaintersState extends EntityState<Painter> {
  selectedPainterId: number | null;
  loading: boolean;
}

export const adapter: EntityAdapter<Painter> = createEntityAdapter<Painter>();
export const initialState: PaintersState = adapter.getInitialState({
  selectedPainterId: null,
  loading: false
});

export function paintersReducer(
  state = initialState,
  action: PaintersActions
): PaintersState {
  switch (action.type) {
    case PaintersActionTypes.PainterSelected: {
      return Object.assign({}, state, { selectedPainterId: action.payload });
    }

    case PaintersActionTypes.LoadPainters: {
      return {
        ...state,
        loading: true
      };
    }

    case PaintersActionTypes.PaintersLoaded: {
      return adapter.addAll(action.payload, { ...state, loading: false });
    }

    case PaintersActionTypes.CreatePainter: {
      return {
        ...state,
        loading: true
      };
    }

    case PaintersActionTypes.PainterCreated: {
      return adapter.addOne(action.payload, { ...state, loading: false });
    }

    case PaintersActionTypes.UpdatePainter: {
      return {
        ...state,
        loading: true
      };
    }

    case PaintersActionTypes.PainterUpdated: {
      return adapter.upsertOne(action.payload, { ...state, loading: false });
    }

    case PaintersActionTypes.DeletePainter: {
      return {
        ...state,
        loading: true
      };
    }

    case PaintersActionTypes.PainterDeleted: {
      return adapter.removeOne(action.payload.id, { ...state, loading: false });
    }

    default:
      return state;
  }
}

export const getSelectedPainterId = (state: PaintersState) => state.selectedPainterId;

export const {
  selectIds: selectedPainterIds,
  selectEntities: selectPainterEntities,
  selectAll: selectAllPainters,
  selectTotal: selectPainterTotal
} = adapter.getSelectors();
