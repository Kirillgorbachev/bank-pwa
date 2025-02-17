import { baseApi } from '@/app/baseApi';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';
import type { ICreateGoalPayload, IGoals, IUpdateGoalPayload } from '@/shared/ui/SwiperContent/ui/InfoItems';

export const goalsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Получение списка целей
        getGoals: builder.query<IGoals[], void>({
            query: () => API_ENDPOINTS.GOALS,
            providesTags: ['Goals'],
        }),

        // Создание цели
        createGoal: builder.mutation<void, ICreateGoalPayload>({
            query: (newGoal) => ({
                url: API_ENDPOINTS.GOALS,
                method: 'POST',
                body: newGoal,
            }),
            invalidatesTags: ['Goals'],
        }),

        // Обновление данных о цели
        updateGoal: builder.mutation<void, IUpdateGoalPayload>({
            query: (payload) => ({
                url: `${API_ENDPOINTS.GOALS}/${payload.id}`,
                method: 'PATCH',
                body: payload,
            }),
            invalidatesTags: ['Goals'],
        }),

        // Удаление цели
        deleteGoal: builder.mutation<void, string>({
            query: (id) => ({
                url: `${API_ENDPOINTS.GOALS}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Goals'],
        }),
    }),
});

export const { useGetGoalsQuery, useCreateGoalMutation, useUpdateGoalMutation, useDeleteGoalMutation } = goalsApi;
