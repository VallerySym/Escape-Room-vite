import { createReducer } from '@reduxjs/toolkit';
import { setActiveGenre, getQuests } from './action';
import { quests } from '../mocks/quests';
import { DEFAULT_GERNE } from '../const';


const initialState = {
  gerneActive: DEFAULT_GERNE,
  quests: quests.filter(
    (item) => item?.title === DEFAULT_GERNE
  ),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.gerneActive = action.payload;
    })

    .addCase(getQuests, (state) => {
      state.quests = quests.filter(
        (item) => item?.title === state.gerneActive
      );
    });
});

export { reducer };
