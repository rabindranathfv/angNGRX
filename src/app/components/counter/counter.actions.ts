import { Action } from '@ngrx/store';

export const INCREASE = '[counter] INCREASE';
export const DECREASE = '[counter] DECREASE';
export const MULTIPLY = '[counter] MULTIPLY';
export const DIVIDE = '[counter] DIVIDE';
export const RESET = '[counter] RESET';


export class IncreaseAction implements Action {
    readonly type = INCREASE;
}

export class DecreaseAction implements Action {
    readonly type = DECREASE;
}

export class MultiplyAction implements Action {
    readonly type = MULTIPLY;

    constructor( public payload: number ) { }
}

export class DivideAction implements Action {
    readonly type = DIVIDE;

    constructor( public payload: number ) { }
}

export class ResetAction implements Action {
    readonly type = RESET;
}

export type actions = IncreaseAction | DecreaseAction | MultiplyAction | DivideAction | ResetAction;