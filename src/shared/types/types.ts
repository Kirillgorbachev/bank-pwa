import type {
    BaseQueryApi,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryReturnValue,
} from '@reduxjs/toolkit/query';

import type { INetworkInfo } from '@/feature/network-info/types/types';

export interface ITransferFundsPayload {
    fromCard: string;
    toCard: string;
    amount: string;
}

export interface ICreateCardPayload {
    value: string;
    label: string;
    icon: string;
    balance: number;
}

export interface ICreateCardTypePayload {
    icon: string;
    name: string;
    description: string;
    maintenanceFee: string;
}

export interface IUpdateCardTypeInfoPayload {
    id: string;
    icon?: string;
    name?: string;
    description?: string;
    maintenanceFee?: string;
}

export interface IUpdateCardBalancePayload {
    cardId: number;
    newBalance: number;
}

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
}

export type TBaseQueryWithReAuth = (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: any,
) => Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>;

export interface INavigator {
    connection?: INetworkInfo;
    deviceMemory?: number;
}
