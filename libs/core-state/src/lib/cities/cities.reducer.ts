import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { City } from '@workspace/core-data';

import { CitiesActions, CitiesActionTypes } from './cities.actions';

export interface CitiesState extends EntityState<City> {
    selectedCityId: number | null;
    loading: boolean;
}

export const adapter: EntityAdapter<City> = createEntityAdapter<City>();
export const initialState: CitiesState = adapter.getInitialState({
    selectedCityId: null,
    loading: false
});

export function citiesReducer(
    state = initialState,
    action: CitiesActions
): CitiesState {
    switch (action.type) {
        case CitiesActionTypes.CitySelected: {
            return Object.assign({}, state, { selectedCityId: action.payload });
        }

        case CitiesActionTypes.LoadCities: {
            return {
                ...state,
                loading: true
            };
        }

        case CitiesActionTypes.CitiesLoaded: {
            return adapter.addAll(action.payload, { ...state, loading: false });
        }

        case CitiesActionTypes.CreateCity: {
            return {
                ...state,
                loading: true
            };
        }

        case CitiesActionTypes.CityCreated: {
            return adapter.addOne(action.payload, {...state, loading: false});
        }

        case CitiesActionTypes.UpdateCity: {
            return {
                ...state,
                loading: true
            };
        }

        case CitiesActionTypes.CityUpdated: {
            return adapter.upsertOne(action.payload, {...state, loading: false});
        }

        case CitiesActionTypes.DeleteCity: {
            return {
                ...state,
                loading: true
            };
        }

        case CitiesActionTypes.CityDeleted: {
            return adapter.removeOne(action.payload.id, {...state, loading: false});
        }

        default:
        return state;
    }
}

export const getSelectedCityId = (state: CitiesState) => state.selectedCityId;

export const {
    selectIds: selectedCityIds,
    selectEntities: selectCityEntities,
    selectAll:selectAllCities,
    selectTotal: selectCityTotal 
} = adapter.getSelectors();