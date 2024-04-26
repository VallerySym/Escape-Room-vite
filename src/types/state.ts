import { store } from '../store/index.js';
import { Quest } from './quest.js';
import { QuestsCard } from './quest-card.js';
import { UserData } from './user-data.js';
import { AuthorizationStatus } from '../const.js';
import { BookingInfo } from './booking-info.js';
import { Location } from './location.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type QuestsProcess = {
  questsData: QuestsCard[];
  allQuestsData: QuestsCard[];
  questType: string;
  difficultLevel: string;
  questsIsLoading: boolean;
  questsIsNotFound: boolean;
};

export type QuestProcess = {
  questData: Quest | null;
  questIsLoading: boolean;
  questIsNotFound: boolean;
};

export type FiltersProcess = {
  currentTheme: string;
  currentDifficulty: string;
};

export type UserProcess = {
  userData: UserData;
  authorizationStatus: AuthorizationStatus;
};

export type DetailedQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type QuestFormData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export type PostData = {
  postData: QuestFormData;
  id: string;
}

export type ReservedQuest = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
}

export type BookingProcess = {
  quests: Quest[];
  detailedQuest: DetailedQuest;
  bookingInfo: BookingInfo[];
  selectedQuestPlaceId: string;
  selectedQuestPlace: BookingInfo;
  questFormData: QuestFormData;
  reservedQuests: ReservedQuest[];
  questType: string;
  bookingQuestIsLoading: boolean;
  bookingQuestIsNotFound: boolean;
};

export type ErrorMessageProcess = {
  errorMessage: string | null;
};
