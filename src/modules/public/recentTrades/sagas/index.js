// tslint:disable-next-line
import { takeEvery } from 'redux-saga/effects';
import { RECENT_TRADES_FETCH } from '../constants';
import { recentTradesFetchSaga } from './recentTradesFetchSaga';

export function* rootRecentTradesSaga() {
    yield takeEvery(RECENT_TRADES_FETCH, recentTradesFetchSaga);
}


// WEBPACK FOOTER //
// src/drone/src/src/modules/public/recentTrades/sagas/index.ts



// WEBPACK FOOTER //
// ./src/modules/public/recentTrades/sagas/index.ts
