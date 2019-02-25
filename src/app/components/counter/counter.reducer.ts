import { INCREASE, DECREASE, MULTIPLY, DIVIDE, RESET, actions } from './counter.actions';
import { Action } from '@ngrx/store';

export function countReducer( state: number = 10, action: actions ) {
    switch ( action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        case MULTIPLY:
            return state * action.payload;
        case DIVIDE:
            return state / action.payload;
        case RESET:
            return 0;
        default:
            return state;
    }
}