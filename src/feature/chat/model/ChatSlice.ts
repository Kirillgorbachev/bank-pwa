import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IChat {
    id: string;
    content: string;
    sender: string;
    direction: 'incoming' | 'outgoing';
    timestamp: string;
    date: string;
}

interface IChatState {
    messages: IChat[];
}

const initialState: IChatState = {
    messages: [],
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<IChat[]>) => {
            state.messages = action.payload;
        },
        addMessage: (state, action: PayloadAction<IChat>) => {
            state.messages.push(action.payload);
        },
    },
});

export const { setMessages, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
