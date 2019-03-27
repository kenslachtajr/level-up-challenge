import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Literature } from '@workspace/core-data';

import { LiteratureActions, LiteratureActionTypes } from './literature.actions';

export interface LiteratureState extends EntityState<Literature> {
    selectedLiteratureId: number | null;
    loading: boolean;
}

export const adapter: EntityAdapter<Literature> = createEntityAdapter<Literature>();
export const initialState: LiteratureState = adapter.getInitialState({
  selectedLiteratureId: null,
  loading: false
});

export function literatureReducer(
    state = initialState,
    action: LiteratureActions
): LiteratureState {
    switch (action.type) {
        case LiteratureActionTypes.LiteratureSelected: {
            return Object.assign({}, state, { selectedLiteratureId: action.payload });
        }

        case LiteratureActionTypes.LoadLiterature: {
            return {
                ...state,
                loading: true
            };
        }

        case LiteratureActionTypes.LiteratureLoaded: {
            return adapter.addAll(action.payload, { ...state, loading: false });
        }

        case LiteratureActionTypes.CreateLiterature: {
            return {
                ...state,
                loading: true
            };
        }

        case LiteratureActionTypes.LiteratureCreated: {
            return adapter.addOne(action.payload, { ...state, loading: false });
        }

        case LiteratureActionTypes.UpdateLiterature: {
            return {
                ...state,
                loading: true
            };
        }

        case LiteratureActionTypes.LiteratureUpdated: {
            return adapter.upsertOne(action.payload, { ...state, loading: false });
        }

        case LiteratureActionTypes.DeleteLiterature: {
            return {
                ...state,
                loading: true
            };
        }

        case LiteratureActionTypes.LiteratureDeleted: {
            return adapter.removeOne(action.payload.id, { ...state, loading: false });
        }

        default:
        return state;
    }
}

export const getSelectedLiteratureId = (state: LiteratureState) => state.selectedLiteratureId;

export const {
    selectIds: selectedLiteratureIds,
    selectEntities: selectLiteratureEntities,
    selectAll: selectAllLiterature,
    selectTotal: selectLiteratureTotal
} = adapter.getSelectors();