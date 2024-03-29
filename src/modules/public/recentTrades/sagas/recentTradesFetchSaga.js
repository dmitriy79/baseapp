// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';
import {
    recentTradesData,
    recentTradesError,
    RecentTradesFetch,
} from '../actions';

const tradesOptions: RequestOptions = {
    apiVersion: 'peatio',
};

export function* recentTradesFetchSaga(action: RecentTradesFetch) {
    try {
        const market = action.payload;
        if (!market.id) {
            throw new Error(`ERROR: Empty market provided to recentTradesFetchSaga`);
        }

        const trades = yield call(API.get(tradesOptions), `/public/markets/${market.id}/trades`);
        yield put(recentTradesData(trades));
    } catch (error) {
        yield put(recentTradesError(error));
    }
}


// WEBPACK FOOTER //
// src/drone/src/src/modules/public/recentTrades/sagas/recentTradesFetchSaga.ts



// WEBPACK FOOTER //
// ./src/modules/public/recentTrades/sagas/recentTradesFetchSaga.ts
