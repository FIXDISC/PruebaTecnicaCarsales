import {Episodio} from './episodio';
import { GET_EPISODIOS } from './actions';
import { Service } from './services/services.component';

export interface AppState {
    episodios: Episodio[];
}

export const INITIAL_STATE: AppState = {
    // episodios: [];
    episodios : [{id: 1, name: 'Episodio1', air_date: '02-02-2020'}]
};

export function rootReducer(state: AppState, action): AppState {
    switch (action.type) {
        case GET_EPISODIOS:
            state.episodios.push(action.payload[0][0]);
            console.log(action.payload[0][0].name)
            return Object.assign({}, state, {
                id: action.payload[0][0].id,
                name: action.payload[0][0].name,
                air_date: action.payload[0][0].id
            });
    }
    return state;
}


