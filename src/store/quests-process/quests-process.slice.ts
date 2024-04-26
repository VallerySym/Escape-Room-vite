import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuests } from '../api-actions';
import { QuestsProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: QuestsProcess = {
  questsData: [],
  allQuestsData: [],
  questType: 'all',
  difficultLevel: 'any',
  questsIsLoading: false,
  questsIsNotFound: false,
};

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    setQuestType: (state: QuestsProcess, action: PayloadAction<string>) => {
      state.questType = action.payload;
    },
    setDifficultLevel: (state: QuestsProcess, action: PayloadAction<string>) => {
      state.difficultLevel = action.payload;
    },
    setQuests(state) {
      if (state.allQuestsData.length) {
        const questsByType = state.allQuestsData.filter((item) => item?.type === state.questType);

        state.questsData = (state.questType, questsByType);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.questsIsNotFound = false;
        state.questsIsLoading = true;
      })
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.questsData = action.payload;
        state.questsIsLoading = false;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.questsIsLoading = false;
        state.questsIsNotFound = true;
      });
  }
});

export const { setQuestType, setDifficultLevel, setQuests } = questsSlice.actions;
