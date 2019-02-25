import { Action } from '@ngrx/store';

export const INCREASE = '[counter] INCREASE';
export const DECREASE = '[counter] DECREASE';

export class IncreaseAction implements Action {
    readonly type = INCREASE;
}

export class DecreaseAction implements Action {
    readonly type = DECREASE;
}