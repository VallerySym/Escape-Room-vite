import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuests } from '../api-actions';
import { QuestsProcess } from '../../types/state';
import { NameSpace, DEFAULT_GERNE } from '../../const';

const initialState: QuestsProcess = {
  questsData: [],
  gerneActive: DEFAULT_GERNE,
  loadingStatus: false,
  errorStatus: false,
};

export const QuestsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setGerneActive(state, action: PayloadAction<string>) {
      state.gerneActive = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.errorStatus = false;
        state.loadingStatus = true;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.questsData = action.payload;
        state.loadingStatus = false;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.loadingStatus = false;
        state.errorStatus = true;
      });
  }
});

export const questsReducer = QuestsSlice.reducer;
