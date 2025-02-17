import { baseApi } from '@/app/baseApi';
import type { ICard } from '@/entities/Card/model/CardsSlice';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';
import type { ICreateCardPayload, IUpdateCardBalancePayload } from '@/shared/types/types';

export const cardsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Получение списка карт
        getCards: builder.query<ICard[], void>({
            query: () => API_ENDPOINTS.CARDS,
            providesTags: ['Cards'],
        }),

        // Создание карты
        createCard: builder.mutation<void, ICreateCardPayload>({
            query: (newCard) => ({
                url: API_ENDPOINTS.CARDS,
                method: 'POST',
                body: newCard,
            }),
            invalidatesTags: ['Cards'],
        }),

        // Обновление баланса карты
        updateCardBalance: builder.mutation<void, IUpdateCardBalancePayload>({
            query: ({ cardId, newBalance }) => ({
                url: `${API_ENDPOINTS.CARDS}/${cardId}`,
                method: 'PATCH',
                body: { balance: newBalance },
            }),
            invalidatesTags: ['Cards'],
        }),

        // Удаление карты
        deleteCard: builder.mutation<void, string>({
            query: (cardId) => ({
                url: `${API_ENDPOINTS.CARDS}/${cardId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cards'],
        }),
    }),
});

export const { useGetCardsQuery, useCreateCardMutation, useUpdateCardBalanceMutation, useDeleteCardMutation } =
    cardsApi;
