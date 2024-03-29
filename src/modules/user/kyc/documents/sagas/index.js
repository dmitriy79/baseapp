// tslint:disable-next-line
import { takeEvery } from 'redux-saga/effects';
import {
    SEND_DOCUMENTS_FETCH,
} from '../constants';
import { sendDocumentsSaga } from './sendDocumentsSaga';

export function* rootSendDocumentsSaga() {
    yield takeEvery(SEND_DOCUMENTS_FETCH, sendDocumentsSaga);
}


// WEBPACK FOOTER //
// src/drone/src/src/modules/user/kyc/documents/sagas/index.ts



// WEBPACK FOOTER //
// ./src/modules/user/kyc/documents/sagas/index.ts
