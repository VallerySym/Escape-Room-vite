import { GerneList } from "./types/gerne-list";

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
    All: 'Все квесты',
    Adventures: 'Приключения',
    Horror: 'Ужасы',
    Mystic: 'Мистика',
    Detective: 'Детектив',
    SciFi: 'Sci-fi',
  } as const;

  export const DEFAULT_GERNE = GERNE_LIST.All;
  