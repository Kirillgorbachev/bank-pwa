import { baseApi } from '@/app/baseApi';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';
import type { ICreateCardTypePayload, IUpdateCardTypeInfoPayload } from '@/shared/types/types';
import type { ICard } from '@/shared/ui/DebitCardItem/ui/DebitCardItem';

export const debitCardsTypeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Получение списка типов дебетовых карт
        getCardsType: builder.query<ICard[], void>({
            query: () => API_ENDPOINTS.DEBITCARDSTYPE,
            providesTags: ['CardsType'],
        }),

        // Создание нового типа дебетовой карты
        createCardType: builder.mutation<void, ICreateCardTypePayload>({
            query: (newCardType: ICreateCardTypePayload) => ({
                url: API_ENDPOINTS.DEBITCARDSTYPE,
                method: 'POST',
                body: newCardType,
            }),
            invalidatesTags: ['CardsType'],
        }),

        // Обновление информации о типе карты
        updateCardTypeInfo: builder.mutation<void, IUpdateCardTypeInfoPayload>({
            query: (info: IUpdateCardTypeInfoPayload) => ({
                url: `${API_ENDPOINTS.CARDS}/${info.id}`,
                method: 'PATCH',
                body: info,
            }),
            invalidatesTags: ['CardsType'],
        }),

        // Удаление типа карты
        deleteCardType: builder.mutation<void, string>({
            query: (id) => ({
                url: `${API_ENDPOINTS.CARDS}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CardsType'],
        }),
    }),
});

export const {
    useGetCardsTypeQuery,
    useCreateCardTypeMutation,
    useUpdateCardTypeInfoMutation,
    useDeleteCardTypeMutation,
} = debitCardsTypeApi;
