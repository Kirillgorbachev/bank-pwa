import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { TRootState } from '@/app/store';

export type TBorder = 'start' | 'end';

export interface ICalendarState {
    firstDateId: string;
    lastDateId: string;
    border: TBorder;
}

const initialState: ICalendarState = {
    firstDateId: '',
    lastDateId: '',
    border: 'start',
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setFirstDateId: (state, action: PayloadAction<string>) => {
            state.firstDateId = action.payload;
        },

        setLastDateId: (state, action: PayloadAction<string>) => {
            state.lastDateId = action.payload;
        },

        setBorder: (state, action: PayloadAction<TBorder>) => {
            state.border = action.payload;
        },
    },
});

export const { setFirstDateId, setLastDateId, setBorder } = calendarSlice.actions;
export const selectFirstDateId = (state: TRootState) => state.calendar.firstDateId;
export const selectLastDateId = (state: TRootState) => state.calendar.lastDateId;
export const selectBorder = (state: TRootState) => state.calendar.border;

export default calendarSlice.reducer;
