import { combineReducers } from 'redux';
import { questsSlice } from './quests-process/quests-process.slice';
import { questSlice } from './quest-process/quest-process.slice';
import { filtersSlice } from './filter-process/filter-process.slice';
import { userSlice } from './user-process/user-process.slice';
import { NameSpace } from '../const';

const rootReducer = combineReducers({
  [NameSpace.Quests]: questsSlice.reducer,
  [NameSpace.Quest]: questSlice.reducer,
  [NameSpace.Filters]: filtersSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});

export default rootReducer;
