import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import calendarReducer from '../entities/Calendar/model/CalendarSlice';
import cardsReducer from '../entities/Card/model/CardsSlice';
import userReducer from '../entities/user/model/UserSlice';
import authReducer from '../feature/auth/model/AuthSlice';
import chatReducer from '../feature/chat/model/ChatSlice';
import payQrCodeReducer from '../feature/payCardQrModal/model/payQrCodeSlice';

import { baseApi } from './baseApi';

import type { ICalendarState } from '@/entities/Calendar/model/CalendarSlice';
import { cardsApi } from '@/entities/Card/api/CardsApi';
import type { ICardsState } from '@/entities/Card/model/CardsSlice';
import type { IUserState } from '@/entities/user/model/UserSlice';
import type { IAuthState } from '@/feature/auth/model/AuthSlice';
import type { ITransferState } from '@/feature/cardTransfer/model/TransferSlice';
import transferReducer from '@/feature/cardTransfer/model/TransferSlice';
import { ChatApi } from '@/feature/chat/api/ChatApi';
import type { IPayQrCodeState } from '@/feature/payCardQrModal/model/payQrCodeSlice';

const userPersistReducer = persistReducer({ key: 'user', storage }, userReducer);

const authPersistReducer = persistReducer({ key: 'auth', storage }, authReducer);

export interface IRootState {
    auth: IAuthState;
    user: IUserState;
    cards: ICardsState;
    transfer: ITransferState;
    calendar: ICalendarState;
    payQrCode: IPayQrCodeState;
}

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authPersistReducer,
        user: userPersistReducer,
        cards: cardsReducer,
        transfer: transferReducer,
        calendar: calendarReducer,
        chat: chatReducer,
        payQrCode: payQrCodeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(baseApi.middleware)
            .concat(cardsApi.middleware)
            .concat(ChatApi.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
