import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    error: string | null;
}

const initialState: IAuthState = {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
            state.isLoggedIn = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.error = null;
        },
        setLogout: (state) => {
            state.isLoggedIn = false;
            state.accessToken = null;
            state.refreshToken = null;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { setLogin, setLogout, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
