import { combineReducers } from 'redux';
import { questsReducer } from './quests-process/quests-process.slice';
import { filtersReducer } from './filter-process/filter-process.slice';
import { NameSpace } from '../const';

const rootReducer = combineReducers({
  [NameSpace.Quests]: questsReducer,
  [NameSpace.Filters]: filtersReducer,
});

export default rootReducer;
