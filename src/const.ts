import { GerneList } from './types/gerne-list';

export enum AppRoute {
    Main = '/',
    Login = '/login',
    MyQuests = '/my-quests',
    Quest = '/quest/:id',
    Booking ='/quest/:id/booking',
    Contacts = '/contacts',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export const GERNE_LIST: GerneList = {
  AllQuests: 'Все квесты',
  Adventures: 'Приключения',
  Horror: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  SciFi: 'Sci-fi',
} as const;

export const DEFAULT_GERNE = GERNE_LIST.AllQuests;

export const gernesList = [
  GERNE_LIST.AllQuests,
  GERNE_LIST.Adventures,
  GERNE_LIST.Horror,
  GERNE_LIST.Mystic,
  GERNE_LIST.Detective,
  GERNE_LIST.SciFi
];

export type FilterTypes = {
  name: string;
  id: string;
  labelText: string;
  isDefault?: boolean;
  iconName?: string;
  iconWidth?: number;
  iconHeight?: number;
};

export const QuestThemeFilters: FilterTypes[] = [
  {
    name: 'type',
    id: 'all',
    labelText: 'Все квесты',
    isDefault: true,
    iconName: 'all-quests',
    iconWidth: 26,
    iconHeight: 30,
  },
  {
    name: 'type',
    id: 'adventure',
    labelText: 'Приключения',
    iconName: 'adventure',
    iconWidth: 36,
    iconHeight: 30,
  },
  {
    name: 'type',
    id: 'horror',
    labelText: 'Ужасы',
    iconName: 'horror',
    iconWidth: 30,
    iconHeight: 30,
  },
  {
    name: 'type',
    id: 'mystic',
    labelText: 'Мистика',
    iconName: 'mystic',
    iconWidth: 30,
    iconHeight: 30,
  },
  {
    name: 'type',
    id: 'detective',
    labelText: 'Детектив',
    iconName: 'detective',
    iconWidth: 40,
    iconHeight: 30,
  },
  {
    name: 'type',
    id: 'sciFi',
    labelText: 'Sci-fi',
    iconName: 'sci-fi',
    iconWidth: 28,
    iconHeight: 30,
  },
];

export const QuestDifficultyFilters: FilterTypes[] = [
  {
    name: 'level',
    id: 'any',
    labelText: 'Любой',
    isDefault: true,
  },
  {
    name: 'level',
    id: 'easy',
    labelText: 'Лёгкий',
  },
  {
    name: 'level',
    id: 'medium',
    labelText: 'Средний',
  },
  {
    name: 'level',
    id: 'hard',
    labelText: 'Сложный',
  },
];

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Quests = '/quest',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Quests = 'QUESTS',
  Quest = 'QUEST',
  Filters = 'FILTERS',
  Auth = 'AUTH',
}

export const OFFICE_POSITION_LATITUDE = 59.968253;
export const OFFICE_POSITION_LONGITUDE = 30.317505;

export const URL_MARKER_DEFAULT = './public/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = './public/img/svg/pin-active.svg';