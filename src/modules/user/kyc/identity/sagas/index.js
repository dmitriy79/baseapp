// tslint:disable-next-line
import { takeEvery } from 'redux-saga/effects';
import {
    SEND_IDENTITY_FETCH,
} from '../constants';
import { sendIdentitySaga } from './sendIdentitySaga';

export function* rootSendIdentitySaga() {
    yield takeEvery(SEND_IDENTITY_FETCH, sendIdentitySaga);
}


// WEBPACK FOOTER //
// src/drone/src/src/modules/user/kyc/identity/sagas/index.ts



// WEBPACK FOOTER //
// ./src/modules/user/kyc/identity/sagas/index.ts
