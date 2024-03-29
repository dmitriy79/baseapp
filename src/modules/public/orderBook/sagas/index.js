// tslint:disable-next-line
import { takeLatest } from 'redux-saga/effects';
import {
    DEPTH_FETCH,
    ORDER_BOOK_FETCH,
} from '../constants';
import { depthSaga } from './depthSaga';
import { orderBookSaga } from './orderBookSaga';

export function* rootOrderBookSaga() {
    yield takeLatest(ORDER_BOOK_FETCH, orderBookSaga);
    yield takeLatest(DEPTH_FETCH, depthSaga);
}


// WEBPACK FOOTER //
// src/drone/src/src/modules/public/orderBook/sagas/index.ts



// WEBPACK FOOTER //
// ./src/modules/public/orderBook/sagas/index.ts
