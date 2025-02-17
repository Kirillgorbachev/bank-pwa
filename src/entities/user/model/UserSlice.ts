import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IUserState {
    data: {
        id: number;
        name: string;
    } | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IUserState = {
    data: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUserState['data']>) => {
            state.data = action.payload;
            state.status = 'succeeded';
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.status = 'failed';
        },
        clearUserData: (state) => {
            state.data = null;
            state.status = 'idle';
        },
    },
});

export const { setUserData, setLoading, setError, clearUserData } = userSlice.actions;
export default userSlice.reducer;
