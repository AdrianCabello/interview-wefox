import { Action } from '@ngrx/store';

export const SET_ACTIVE = '[Navigation] Set Active';

export class SetActive implements Action {
    readonly type = SET_ACTIVE;
    constructor(public active: string) { }
}

export type actions = SetActive;
