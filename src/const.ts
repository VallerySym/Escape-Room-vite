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

export const gernesList = [
  GERNE_LIST.AllQuests,
  GERNE_LIST.Adventures,
  GERNE_LIST.Horror,
  GERNE_LIST.Mystic,
  GERNE_LIST.Detective,
  GERNE_LIST.SciFi
];

export const DIFFICULTY_LEVELS = {
  'easy': 'Легкий',
  'medium': 'Средний',
  'hard': 'Сложный'
};

export type FilterTypes = {
  name: string;
  id: string;
  labelText: string;
  isDefault?: boolean;
  iconName?: string;
  iconWidth?: number;
  iconHeight?: number;
};

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
  User='USER'
}

export const OFFICE_POSITION_LATITUDE = 59.968253;
export const OFFICE_POSITION_LONGITUDE = 30.317505;

export const URL_MARKER_DEFAULT = './public/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = './public/img/svg/pin-active.svg';

export const QUEST_TYPES_FILTERS = [
  { id: 'all', icon: 'icon-all-quests', text: 'Все квесты', width: 26, height: 30 },
  { id: 'adventures', icon: 'icon-adventure', text: 'Приключения', width: 36, height: 30 },
  { id: 'horror', icon: 'icon-horror', text: 'Ужасы', width: 30, height: 30 },
  { id: 'mystic', icon: 'icon-mystic', text: 'Мистика', width: 30, height: 30 },
  { id: 'detective', icon: 'icon-detective', text: 'Детектив', width: 40, height: 30 },
  { id: 'sci-fi', icon: 'icon-sci-fi', text: 'Sci-fi', width: 28, height: 30 },
];

export const QUEST_LEVELS_FILTERS = [
  { id: 'any', text: 'Любой' },
  { id: 'easy', text: 'Лёгкий' },
  { id: 'medium', text: 'Средний' },
  { id: 'hard', text: 'Сложный' },
];