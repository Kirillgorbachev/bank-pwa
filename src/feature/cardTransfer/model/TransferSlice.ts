import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { cardsApi } from '@/entities/Card/api/CardsApi';
import type { ICard } from '@/entities/Card/model/CardsSlice';

export interface ITransferState {
    fromCard: string;
    toCard: string;
    amount: string;
    cards: Array<ICard>;
    error: string;
    isTransferring: boolean;
}

const initialState: ITransferState = {
    fromCard: '',
    toCard: '',
    amount: '',
    cards: [],
    error: '',
    isTransferring: false,
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const performPhoneTransfer = createAsyncThunk(
    'cardTransfer/performPhoneTransfer',
    async (
        {
            fromCardObject,
            phoneNumber,
            transferedAmount,
        }: { fromCardObject: ICard | undefined; phoneNumber: string; transferedAmount: string },
        { dispatch, rejectWithValue },
    ) => {
        const transferAmount = parseFloat(transferedAmount);

        if (!fromCardObject || !phoneNumber || isNaN(transferAmount)) {
            dispatch(setError('Ошибка в данных перевода.'));

            return rejectWithValue('Ошибка в данных карты или номера телефона.');
        }

        if (parseFloat(fromCardObject.balance) < transferAmount) {
            return rejectWithValue('Недостаточно средств на карте!');
        }

        dispatch(setIsTransferring(true));

        try {
            await delay(2000);
            // Получаем целевую карту по номеру телефона
            const recipientCards = await dispatch(cardsApi.endpoints.getCards.initiate()).unwrap();

            const toCard = recipientCards.find((card) => card.phoneNumber === phoneNumber);

            if (!toCard) {
                return rejectWithValue('Карта для указанного номера телефона не найдена.');
            }

            // Обновляем баланс обеих карт
            await Promise.all([
                dispatch(
                    cardsApi.endpoints.updateCardBalance.initiate({
                        cardId: fromCardObject.id,
                        newBalance: parseFloat(fromCardObject.balance) - transferAmount,
                    }),
                ).unwrap(),
                dispatch(
                    cardsApi.endpoints.updateCardBalance.initiate({
                        cardId: toCard.id,
                        newBalance: parseFloat(toCard.balance) + transferAmount,
                    }),
                ).unwrap(),
            ]);

            dispatch(resetTransfer());

            return { success: true };
        } catch (error) {
            console.error('Ошибка при переводе по номеру телефона:', error);

            return rejectWithValue('Не удалось выполнить перевод по номеру телефона.');
        } finally {
            dispatch(setIsTransferring(false));
        }
    },
);

export const performCardTransfer = createAsyncThunk(
    'cardTransfer/performTransfer',
    async (
        {
            fromCardObject,
            toCardObject,
            transferedAmount,
        }: { fromCardObject: ICard | undefined; toCardObject: ICard | undefined; transferedAmount: string },
        { dispatch, rejectWithValue },
    ) => {
        const transferAmount = parseFloat(transferedAmount);

        if (!fromCardObject || !toCardObject || isNaN(transferAmount)) {
            dispatch(setError('Ошибка в данных перевода.'));

            return rejectWithValue('Ошибка в данных карт.');
        }

        if (parseFloat(fromCardObject.balance) < transferAmount) {
            return rejectWithValue('Недостаточно средств на карте!');
        }

        dispatch(setIsTransferring(true));

        try {
            await delay(2000);

            // Вызов RTK Query через dispatch
            await Promise.all([
                dispatch(
                    cardsApi.endpoints.updateCardBalance.initiate({
                        cardId: fromCardObject.id,
                        newBalance: parseFloat(fromCardObject.balance) - transferAmount,
                    }),
                ).unwrap(),
                dispatch(
                    cardsApi.endpoints.updateCardBalance.initiate({
                        cardId: toCardObject.id,
                        newBalance: parseFloat(toCardObject.balance) + transferAmount,
                    }),
                ).unwrap(),
            ]);

            dispatch(resetTransfer());

            return { success: true };
        } catch (error) {
            console.error('Ошибка при переводе:', error);

            return rejectWithValue('Не удалось выполнить перевод.');
        } finally {
            dispatch(setIsTransferring(false));
        }
    },
);

const transferSlice = createSlice({
    name: 'transfer',
    initialState,
    reducers: {
        setFromCard: (state, action: PayloadAction<string>) => {
            state.fromCard = action.payload;
        },
        setToCard: (state, action: PayloadAction<string>) => {
            state.toCard = action.payload;
        },
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setIsTransferring: (state, action: PayloadAction<boolean>) => {
            state.isTransferring = action.payload;
        },
        resetTransfer: (state) => {
            state.fromCard = '';
            state.toCard = '';
            state.amount = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(performCardTransfer.pending, (state) => {
                state.isTransferring = true;
                state.error = '';
            })
            .addCase(performCardTransfer.fulfilled, (state) => {
                state.isTransferring = false;
            })
            .addCase(performCardTransfer.rejected, (state, action) => {
                state.isTransferring = false;
                state.error = action.payload as string;
            })
            .addCase(performPhoneTransfer.pending, (state) => {
                state.isTransferring = true;
                state.error = '';
            })
            .addCase(performPhoneTransfer.fulfilled, (state) => {
                state.isTransferring = false;
            })
            .addCase(performPhoneTransfer.rejected, (state, action) => {
                state.isTransferring = false;
                state.error = action.payload as string;
            });
    },
});

export const { setFromCard, setToCard, setAmount, resetTransfer, setIsTransferring, setError } = transferSlice.actions;

export default transferSlice.reducer;
