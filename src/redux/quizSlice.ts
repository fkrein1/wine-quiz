import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface QuizState {
  currentQuestion: number;
  maxQuestions: number;
}

const initialState: QuizState = {
  currentQuestion: 0,
  maxQuestions: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      state.currentQuestion += 1;
    },
    setMaxQuestions: (state, action: PayloadAction<number>) => {
      state.maxQuestions += action.payload;
    },
  },
});

export const { nextQuestion, setMaxQuestions } = quizSlice.actions;

export default quizSlice.reducer;
