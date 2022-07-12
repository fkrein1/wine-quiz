import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface WineState {
  wineBody: number;
  redWineShare: string;
}

const initialState: WineState = {
  wineBody: 0,
  redWineShare: '',
};

export const wineSlice = createSlice({
  name: 'wine',
  initialState,
  reducers: {
    incrementWineBody: (state, action: PayloadAction<number>) => {
      state.wineBody += action.payload;
    },
    setRedWineShare: (state, action: PayloadAction<string>) => {
      state.redWineShare = action.payload;
    },
  },
});

export const { incrementWineBody, setRedWineShare } = wineSlice.actions;

export default wineSlice.reducer;
