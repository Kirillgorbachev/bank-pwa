import type { IDocument } from '../types/documentList.types';

import { baseApi } from '@/app/baseApi';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';

export const documentsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDocuments: builder.query<IDocument[], void>({
            query: () => API_ENDPOINTS.DOCUMENTS,
            providesTags: ['Documents'],
        }),

        createDocument: builder.mutation<void, IDocument>({
            query: (newDocument) => ({
                url: API_ENDPOINTS.DOCUMENTS,
                method: 'POST',
                body: newDocument,
            }),
            invalidatesTags: ['Documents'],
        }),
    }),
});

export const { useGetDocumentsQuery, useCreateDocumentMutation } = documentsApi;
