import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FiltersProcess } from '../../types/state';

type ChangeThemePayload = {
  theme: string;
};

type changeDifficultyPayload = {
  difficulty: string;
};

const initialState: FiltersProcess = {
  currentTheme: 'all',
  currentDifficulty: 'any',
};

export const filtersSlice = createSlice({
  name: NameSpace.Filters,
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ChangeThemePayload>) => {
      const {theme} = action.payload;
      state.currentTheme = theme;
    },
    changeDifficulty: (state, action: PayloadAction<changeDifficultyPayload>) => {
      const {difficulty} = action.payload;
      state.currentDifficulty = difficulty;
    },
  },
});
