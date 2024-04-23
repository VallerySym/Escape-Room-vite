import { combineReducers } from 'redux';
import { questsReducer } from './quests-process/quests-process.slice';
import { questReducer } from './quest-process/quest-process.slice';
import { filtersReducer } from './filter-process/filter-process.slice';
import { NameSpace } from '../const';

const rootReducer = combineReducers({
  [NameSpace.Quests]: questsReducer,
  [NameSpace.Quest]: questReducer,
  [NameSpace.Filters]: filtersReducer,
});

export default rootReducer;
