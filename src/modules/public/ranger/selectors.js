import { RootState } from '../..';
import { RangerState } from './reducer';

export const selectRanger = (state: RootState): RangerState =>
    state.public.ranger;

export const selectRangerIsConnected = (state: RootState): boolean =>
    state.public.ranger.connected;

export const selectSubscriptions = (state: RootState): string[] =>
    state.public.ranger.subscriptions;


// WEBPACK FOOTER //
// src/drone/src/src/modules/public/ranger/selectors.ts



// WEBPACK FOOTER //
// ./src/modules/public/ranger/selectors.ts
