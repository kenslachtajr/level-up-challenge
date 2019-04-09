import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Pokemon } from '@workspace/core-data';

import { PokemonActions, PokemonActionTypes } from './pokemon.actions';

export interface PokemonState extends EntityState<Pokemon> {
    selectedPokemonId: number | null;
    loading: boolean;
}

export const adapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>();
export const initialState: PokemonState = adapter.getInitialState({
    selectedPokemonId: null,
    loading: false
});

export function pokemonReducer(
    state = initialState,
    action: PokemonActions
): PokemonState {
    switch (action.type) {
        case PokemonActionTypes.PokemonSelected: {
            return Object.assign({}, state, { selectedPokemonId: action.payload });
        }

        case PokemonActionTypes.LoadPokemon: {
            return {
                ...state,
                loading: true
            };
        }

        case PokemonActionTypes.PokemonLoaded: {
            return adapter.addAll(action.payload, { ...state, loading: false });
        }

        case PokemonActionTypes.CreatePokemon: {
            return {
                ...state,
                loading: true
            };
        }

        case PokemonActionTypes.PokemonCreated: {
            return adapter.addOne(action.payload, { ...state, loading: false });
        }

        case PokemonActionTypes.UpdatePokemon: {
            return {
                ...state,
                loading: true
            };
        }

        case PokemonActionTypes.PokemonUpdated: {
            return adapter.upsertOne(action.payload, { ...state, loading: false });
        }

        case PokemonActionTypes.DeletePokemon: {
            return {
                ...state,
                loading: true
            };
        }

        case PokemonActionTypes.PokemonDeleted: {
            return adapter.removeOne(action.payload.id, { ...state, loading: false });
        }

        default:
        return state;
    }
}

export const getSelectedPokemonId = (state: PokemonState) => state.selectedPokemonId;

export const {
    selectIds: selectedPokemonIds,
    selectEntities: selectPokemonEntities,
    selectAll: selectAllPokemon,
    selectTotal: selectPokemonTotal
} = adapter.getSelectors();