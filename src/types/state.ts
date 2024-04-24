import { store } from '../store/index.js';
import { Quest } from './quest.js';
import { QuestsCard } from './quest-card.js';
import { UserData } from './user-data.js';
import { AuthorizationStatus } from '../const.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type QuestsProcess = {
  questsData: QuestsCard[];
  allQuestsData: QuestsCard[];
  questType: string,
  difficultLevel: string,
  questsIsLoading: boolean,
  questsIsNotFound: boolean,
};

export type QuestProcess = {
  questData: Quest | null;
  questIsLoading: boolean,
  questIsNotFound: boolean,
};

export type FiltersProcess = {
  currentTheme: string;
  currentDifficulty: string;
};

export type UserProcess = {
  userData: UserData;
  authorizationStatus: AuthorizationStatus;
};
