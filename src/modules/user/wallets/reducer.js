import { CommonError } from '../../types';
import { WalletsAction } from './actions';
import {
    SET_MOBILE_WALLET_UI,
    WALLETS_ADDRESS_DATA,
    WALLETS_ADDRESS_ERROR,
    WALLETS_ADDRESS_FETCH,
    WALLETS_DATA,
    WALLETS_ERROR,
    WALLETS_FETCH,
    WALLETS_RESET,
    WALLETS_WITHDRAW_CCY_DATA,
    WALLETS_WITHDRAW_CCY_ERROR,
    WALLETS_WITHDRAW_CCY_FETCH,
} from './constants';
import { Wallet } from './types';

export interface WalletsState {
    wallets: {
        list: Wallet[];
        loading: boolean;
        withdrawSuccess: boolean;
        error?: CommonError;
        mobileWalletChosen: string;
    };
}

export const initialWalletsState: WalletsState = {
    wallets: {
        list: [],
        loading: false,
        withdrawSuccess: false,
        mobileWalletChosen: '',
    },
};

const walletsListReducer = (state: WalletsState['wallets'], action: WalletsAction): WalletsState['wallets'] => {
    switch (action.type) {
        case WALLETS_ADDRESS_FETCH:
        case WALLETS_FETCH:
            return {
                ...state,
                loading: true,
            };
        case WALLETS_WITHDRAW_CCY_FETCH:
            return {
                ...state,
                loading: true,
                withdrawSuccess: false,
            };
        case WALLETS_DATA: {
            return {
                ...state,
                loading: false,
                list: action.payload,
            };
        }
        case WALLETS_ADDRESS_DATA: {
            const walletIndex = state.list.findIndex(
                wallet => wallet.currency.toLowerCase() === action.payload.currency.toLowerCase(),
            );

            if (walletIndex !== -1) {
                const list = [ ...state.list ];
                const updatedWallet = {
                    ...state.list[walletIndex],
                    address: action.payload.address,
                };

                list.splice(walletIndex, 1, updatedWallet);

                return {
                    ...state,
                    loading: false,
                    list,
                };
            }

            return {
                ...state,
                loading: false,
            };
        }
        case WALLETS_WITHDRAW_CCY_DATA:
            return {
                ...state,
                loading: false,
                withdrawSuccess: true,
            };
        case WALLETS_WITHDRAW_CCY_ERROR:
            return {
                ...state,
                loading: false,
                withdrawSuccess: false,
                error: action.payload,
            };
        case WALLETS_ADDRESS_ERROR:
        case WALLETS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case SET_MOBILE_WALLET_UI:
            return { ...state, mobileWalletChosen: action.payload };
        default:
            return state;
    }
};

export const walletsReducer = (state = initialWalletsState, action: WalletsAction): WalletsState => {
    switch (action.type) {
        case WALLETS_FETCH:
        case WALLETS_DATA:
        case WALLETS_ERROR:
        case WALLETS_ADDRESS_FETCH:
        case WALLETS_ADDRESS_DATA:
        case WALLETS_ADDRESS_ERROR:
        case WALLETS_WITHDRAW_CCY_FETCH:
        case WALLETS_WITHDRAW_CCY_DATA:
        case SET_MOBILE_WALLET_UI:
        case WALLETS_WITHDRAW_CCY_ERROR:
            const walletsListState = { ...state.wallets };
            return {
                ...state,
                wallets: walletsListReducer(walletsListState, action),
            };
        case WALLETS_RESET:
            return {
                ...state,
                wallets: {
                    list: [],
                    loading: false,
                    withdrawSuccess: false,
                    mobileWalletChosen: '',
                },
            };
        default:
            return state;
    }
};


