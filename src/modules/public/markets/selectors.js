import { RootState } from '../../index';
import { MarketsState } from './reducer';
import { Market } from './types';

const selectMarketsState = (state: RootState): MarketsState => state.public.markets;

export const selectMarkets = (state: RootState): Market[] =>
    selectMarketsState(state).list;

export const selectMarketsLoading = (state: RootState): boolean | undefined =>
    selectMarketsState(state).loading;

export const selectCurrentMarket = (state: RootState): Market | undefined =>
    selectMarketsState(state).currentMarket;

export const selectMarketTickers = (state: RootState): MarketsState['tickers'] =>
    selectMarketsState(state).tickers;


// WEBPACK FOOTER //
// src/drone/src/src/modules/public/markets/selectors.ts



// WEBPACK FOOTER //
// ./src/modules/public/markets/selectors.ts
