import { baseApi } from '@/app/baseApi';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';

export interface IChat {
    id: string;
    content: string;
    sender: string;
    direction: 'incoming' | 'outgoing';
    timestamp: string;
    date: string;
}

export const ChatApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMessages: build.query<IChat[], void>({
            query: () => API_ENDPOINTS.MESSAGES,
            providesTags: ['Messages'],
        }),
        sendMessage: build.mutation({
            query: (newMessage) => ({
                url: API_ENDPOINTS.MESSAGES,
                method: 'POST',
                body: newMessage,
            }),
            invalidatesTags: ['Messages'],
        }),
    }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = ChatApi;
