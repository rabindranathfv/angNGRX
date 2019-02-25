import * as fromCounter from './counter.actions';


export function countReducer( state: number = 10, action: fromCounter.actions ) {
    switch ( action.type) {
        case fromCounter.INCREASE:
            return state + 1;
        case fromCounter.DECREASE:
            return state - 1;
        case fromCounter.MULTIPLY:
            return state * action.payload;
        case fromCounter.DIVIDE:
            return state / action.payload;
        case fromCounter.RESET:
            return 0;
        default:
            return state;
    }
}