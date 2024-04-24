import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestById } from '../api-actions';
import { QuestProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: QuestProcess = {
  questData: null,
  questIsLoading: false,
  questIsNotFound: false,
};

export const questSlice = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestById.pending, (state) => {
        state.questIsNotFound = false;
        state.questIsLoading = true;
      })
      .addCase(fetchQuestById.fulfilled, (state, action) => {
        state.questData = action.payload;
        state.questIsLoading = false;
      })
      .addCase(fetchQuestById.rejected, (state) => {
        state.questIsLoading = false;
        state.questIsNotFound = true;
      });
  }
});
