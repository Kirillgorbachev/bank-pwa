import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TRootState } from './store';

import { setLogin, setLogout } from '@/feature/auth/model/AuthSlice';
import { API_BASE_URL } from '@/shared/const/apiEndpoints/apiEndpoints';
import type { IAuthResponse, TBaseQueryWithReAuth } from '@/shared/types/types';

// Базовый запрос с токеном
export const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as TRootState;
        const token = state.auth.accessToken;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
            console.log(`Token ${token} is attached to request`);
        }

        return headers;
    },
});

// Обработчик запросов с автообновлением токена
export const baseQueryWithReAuth: TBaseQueryWithReAuth = async (args, api, extraOptions) => {
    // Выполняем основной запрос
    let result = await baseQuery(args, api, extraOptions);

    const fallbackResult = {
        data: null,
        error: {
            status: 500,
            statusText: 'Unknown error',
            data: null,
        } as FetchBaseQueryError,
    };

    // Проверка на ошибку авторизации
    if (result?.error?.status === 403) {
        console.log('baseApi: sending refresh token');

        // Выполняем запрос на обновление токена
        const refreshResult = await baseQuery(API_BASE_URL, api, extraOptions);
        const data = refreshResult?.data as IAuthResponse;

        if (data?.accessToken) {
            // Сохраняем новый токен и повторяем исходный запрос
            api.dispatch(setLogin({ accessToken: data.accessToken, refreshToken: data.refreshToken }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Если токен обновить не удалось, завершаем сессию
            api.dispatch(setLogout());
        }
    }

    return result || fallbackResult;
};
