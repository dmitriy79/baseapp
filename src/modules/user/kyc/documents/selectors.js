import { RootState } from '../../../index';
import { DocumentsState } from './reducer';

export const selectSendDocumentsSuccess = (state: RootState): DocumentsState['success'] =>
    state.user.documents.success;

export const selectSendDocumentsLoading = (state: RootState): DocumentsState['loading'] =>
    state.user.documents.loading;


// WEBPACK FOOTER //
// src/drone/src/src/modules/user/kyc/documents/selectors.ts



// WEBPACK FOOTER //
// ./src/modules/user/kyc/documents/selectors.ts
