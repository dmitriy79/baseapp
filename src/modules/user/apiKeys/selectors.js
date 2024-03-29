import { ApiKeys2FAModal, ApiKeysState, RootState } from '../../index';

export const selectApiKeys = (state: RootState): ApiKeysState['apiKeys'] => state.user.apiKeys.apiKeys;

export const selectApiKeysDataLoaded = (state: RootState): ApiKeysState['dataLoaded'] => state.user.apiKeys.dataLoaded;

export const selectApiKeysModal = (state: RootState): ApiKeys2FAModal['payload'] => state.user.apiKeys.modal;


// WEBPACK FOOTER //
// src/drone/src/src/modules/user/apiKeys/selectors.ts



// WEBPACK FOOTER //
// ./src/modules/user/apiKeys/selectors.ts
