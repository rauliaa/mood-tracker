import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoodState {
  mood: string;
}

const initialState: MoodState = {
  mood: '',
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    setMood: (state, action: PayloadAction<string>) => {
      state.mood = action.payload;
    },
  },
});

export const { setMood } = moodSlice.actions;
export default moodSlice.reducer;
