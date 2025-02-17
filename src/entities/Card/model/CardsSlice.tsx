import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ITransaction } from '@/shared/types/transactionTypes';

export interface ICard {
    id: number;
    value: string;
    label: string;
    balance: string;
    points?: number;
    icon: React.ReactNode;
    phoneNumber: string;
    info?: ITransaction[];
}

export interface ICardsState {
    cardOptions: ICard[];
}

const initialState: ICardsState = {
    cardOptions: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<ICard>) => {
            state.cardOptions.push(action.payload);
        },
        updateBalance: (state, action: PayloadAction<{ cardValue: string; newBalance: string }>) => {
            const { cardValue, newBalance } = action.payload;
            const card = state.cardOptions.find((c) => c.value === cardValue);

            if (card) {
                card.balance = newBalance;
            }
        },
        removeCard: (state, action: PayloadAction<string>) => {
            state.cardOptions = state.cardOptions.filter((card) => card.value !== action.payload);
        },
    },
});

export const { addCard, updateBalance, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;
