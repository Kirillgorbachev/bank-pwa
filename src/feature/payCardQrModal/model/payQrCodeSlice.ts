import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { TRootState } from '@/app/store';
import { cardsApi } from '@/entities/Card/api/CardsApi';
import type { ICard } from '@/entities/Card/model/CardsSlice';

export interface IPayQrCodeState {
    amount: number;
    card: string;
    isTransferring: boolean;
}

const initialState: IPayQrCodeState = {
    amount: 0,
    card: '',
    isTransferring: false,
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const payQrCode = createAsyncThunk(
    'payQrCode',
    async ({ selectedCardObject, amount }: { selectedCardObject: ICard; amount: number }, { dispatch }) => {
        dispatch(setIsTransferring(true));

        try {
            await delay(2000);

            // Обновляем баланс обеих карт
            await Promise.all([
                dispatch(
                    cardsApi.endpoints.updateCardBalance.initiate({
                        cardId: selectedCardObject.id,
                        newBalance: parseFloat(selectedCardObject.balance) - amount,
                    }),
                ).unwrap(),
            ]);

            return { success: true };
        } finally {
            dispatch(setIsTransferring(false));
        }
    },
);

export const payQrCodeSlice = createSlice({
    name: 'payQrCode',
    initialState,
    reducers: {
        setCard: (state, action: PayloadAction<string>) => {
            state.card = action.payload;
        },
        setAmount: (state, action: PayloadAction<number>) => {
            state.amount = action.payload;
        },
        setIsTransferring: (state, action: PayloadAction<boolean>) => {
            state.isTransferring = action.payload;
        },
    },
});

export const { setCard, setAmount, setIsTransferring } = payQrCodeSlice.actions;

export default payQrCodeSlice.reducer;

export const selectedCard = (state: TRootState) => state.payQrCode.card;
export const selectedAmount = (state: TRootState) => state.payQrCode.amount;
export const selectIsTransferring = (state: TRootState) => state.payQrCode.isTransferring;
