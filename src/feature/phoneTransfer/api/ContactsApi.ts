import { baseApi } from '@/app/baseApi';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';
import { MAX_CONTACTS } from '@/shared/const/contacts/contacts.';

export const cardsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Получение списка контактов
        getContacts: builder.query<{ id: string; name: string; phoneNumber: string; avatar?: string }[], void>({
            query: () => API_ENDPOINTS.CONTACTS,
            transformResponse: (response: { id: string; name: string; phoneNumber: string; avatar?: string }[]) =>
                response.slice(0, MAX_CONTACTS),
            providesTags: ['Contacts'],
        }),
    }),
});

export const { useGetContactsQuery } = cardsApi;
