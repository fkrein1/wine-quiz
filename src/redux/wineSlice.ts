import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface WineState {
  wineBody: number;
  redWineShare: number;
}

const initialState: WineState = {
  wineBody: 0,
  redWineShare: 0.5,
};

export const wineSlice = createSlice({
  name: 'wine',
  initialState,
  reducers: {
    incrementWineBody: (state, action: PayloadAction<number>) => {
      state.wineBody += action.payload;
    },
    setRedWineShare: (state, action: PayloadAction<number>) => {
      state.redWineShare = action.payload;
    },
    resetWineBody: (state) => {
      state.wineBody = 0;
    },
  },
});

export const { incrementWineBody, setRedWineShare, resetWineBody } = wineSlice.actions;

export default wineSlice.reducer;
