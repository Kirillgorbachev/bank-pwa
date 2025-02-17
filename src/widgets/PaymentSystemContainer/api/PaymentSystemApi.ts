import { baseApi } from '@/app/baseApi';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';
import type { ICreatePaymentSystem, IPaymentOptions } from '@/widgets/PaymentSystemContainer/types/PaymentTypes';

export const paymentSystemApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Получение списка платежных систем
        getPaymentSystems: builder.query<IPaymentOptions[], void>({
            query: () => API_ENDPOINTS.PAYMENT_SYSTEMS,
            providesTags: ['PaymentSystems'],
        }),

        // Создание новой платежной системы
        createPaymentSystem: builder.mutation<void, ICreatePaymentSystem>({
            query: (newPaymentSystem) => ({
                url: API_ENDPOINTS.PAYMENT_SYSTEMS,
                method: 'POST',
                body: newPaymentSystem,
            }),
            invalidatesTags: ['PaymentSystems'],
        }),

        // Удаление платежной системы
        deletePaymentSystem: builder.mutation<void, string>({
            query: (id) => ({
                url: `${API_ENDPOINTS.PAYMENT_SYSTEMS}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['PaymentSystems'],
        }),
    }),
});

export const { useGetPaymentSystemsQuery, useCreatePaymentSystemMutation, useDeletePaymentSystemMutation } =
    paymentSystemApi;
