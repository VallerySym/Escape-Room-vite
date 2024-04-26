import { combineReducers } from 'redux';
import { questsSlice } from './quests-process/quests-process.slice';
import { questSlice } from './quest-process/quest-process.slice';
import { userSlice } from './user-process/user-process.slice';
import { bookingSlice } from './booking-process/booking-process.slice';
import { errorMessageSlice } from './error-message-process/error-message-process.slice';
import { NameSpace } from '../const';

const rootReducer = combineReducers({
  [NameSpace.Quests]: questsSlice.reducer,
  [NameSpace.Quest]: questSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Booking]: bookingSlice.reducer,
  [NameSpace.Error]: errorMessageSlice.reducer,
});

export default rootReducer;
