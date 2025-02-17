import { baseApi } from '@/app/baseApi';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';

export interface IUser {
    id: number;
    webauthnId: string;
    name: string;
    password: string;
    accessToken: string;
    refreshToken: string;
    publicKey: string;
}

export const AuthApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.query<IUser[], void>({
            query: () => API_ENDPOINTS.USERS,
            providesTags: ['User'],
        }),
        logout: build.mutation({
            query: ({ id }) => ({
                url: `${API_ENDPOINTS.USERS}/${id}`,
                method: 'DELETE',
                invalidatesTags: ['User'],
            }),
        }),
        registerWebAuthn: build.mutation({
            query: ({ id, webauthnId, publicKey }: { id: number; webauthnId: string; publicKey: string }) => ({
                url: `${API_ENDPOINTS.USERS}/${id}`,
                method: 'PATCH',
                body: { webauthnId, publicKey },
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useLoginQuery, useLogoutMutation, useRegisterWebAuthnMutation } = AuthApi;
