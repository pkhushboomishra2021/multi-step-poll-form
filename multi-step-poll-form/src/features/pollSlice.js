
import { createSlice } from '@reduxjs/toolkit';

const pollSlice = createSlice({
  name: 'poll',
  initialState: {
    currentStep: 0,
    answers: [],
  },
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setAnswer: (state, action) => {
      state.answers[state.currentStep] = action.payload;
    },
    submitPoll: (state) => {
      // Submit to mock API here
    },
  },
});

export const { setStep, setAnswer, submitPoll } = pollSlice.actions;

export default pollSlice.reducer;
