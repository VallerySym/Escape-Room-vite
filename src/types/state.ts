import {store} from '../store/index.js';
import { Quest } from './quest.js';
import { QuestsCard } from './quest-card.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type QuestsProcess = {
    questsData: QuestsCard[];
    gerneActive: string;
    loadingStatus: boolean;
    errorStatus: boolean;
};

export type QuestProcess = {
    questData: Quest | null;
    loadingStatus: boolean;
    errorStatus: boolean;
};

export type FiltersProcess = {
    currentTheme: string;
    currentDifficulty: string;
  };
