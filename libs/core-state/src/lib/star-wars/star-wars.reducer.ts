import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { StarWars } from '@workspace/core-data';

import { StarWarsActions, StarWarsActionTypes, StarWarsLoaded } from './star-wars.actions';

export interface StarWarsState extends EntityState<StarWars> {
    selectedStarWarsId: number | null;
    loading: boolean;
}

export const adapter: EntityAdapter<StarWars> = createEntityAdapter<StarWars>();
export const initialState: StarWarsState = adapter.getInitialState({
    selectedStarWarsId: null,
    loading: false
});

export function starWarsReducer(
    state = initialState,
    action: StarWarsActions
): StarWarsState {
    switch (action.type) {
        case StarWarsActionTypes.StarWarsSelected: {
            return Object.assign({}, state, { selectedStarWarsId: action.payload });
        }

        case StarWarsActionTypes.LoadStarWars: {
            return {
                ...state,
                loading: true
            };
        }

        case StarWarsActionTypes.StarWarsLoaded: {
            return adapter.addAll(action.payload, { ...state, loading: false })
        }

        case StarWarsActionTypes.CreateStarWars: {
            return {
                ...state,
                loading: true
            };
        }
        
        case StarWarsActionTypes.StarWarsCreated: {
            return adapter.addOne(action.payload, { ...state, loading: false});
        }

        case StarWarsActionTypes.UpdateStarWars: {
            return {
                ...state,
                loading: true
            };
        }

        case StarWarsActionTypes.StarWarsUpdated: {
            return adapter.upsertOne(action.payload, { ...state, loading: false });
        }

        case StarWarsActionTypes.DeleteStarWars: {
            return {
                ...state,
                loading: true
            };
        }

        case StarWarsActionTypes.StarWarsDeleted: {
            return adapter.removeOne(action.payload.id, { ...state, loading: false });
        }

        default:
        return state;
    }
}

export const getSelectedStarWarsId = (state: StarWarsState) => state.selectedStarWarsId;

export const {
    selectIds: selectedStarWarsIds,
    selectEntities: selectStarWarsEntities,
    selectAll: selectAllStarWars,
    selectTotal: selectStarWarsTotal
} = adapter.getSelectors();