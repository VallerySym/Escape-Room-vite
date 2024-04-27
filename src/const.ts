import { Location } from './types/location';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyQuests = '/my-quests',
  Quest = '/quest/:id',
  Booking = '/quest/:id/booking',
  Contacts = '/contacts',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Quests = '/quest',
  Login = '/login',
  Logout = '/logout',
  Booking = '/booking',
  MyQuests = '/reservation',
}

export enum NameSpace {
  Quests = 'QUESTS',
  Quest = 'QUEST',
  Filters = 'FILTERS',
  Auth = 'AUTH',
  User = 'USER',
  Booking = 'BOOKING',
  Error = 'ERROR'
}

export const DEFAULT_OFFICE_LOCATION: Location = {
  address: '',
  coords: [59.968253, 30.317505]
};

export const URL_MARKER_DEFAULT = '/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = '/img/svg/pin-active.svg';

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

export const QUEST_TYPES = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi'
};

export const DIFFICULTY_LEVELS = {
  'any': 'Любой',
  'easy': 'Легкий',
  'medium': 'Средний',
  'hard': 'Сложный'
};

export enum QuestDate {
  today = 'Сегодня',
  tomorrow = 'Завтра',
}
