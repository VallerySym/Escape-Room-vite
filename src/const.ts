export enum AppRoute {
    Main = '/',
    Login = '/login',
    MyQuests = '/my-quests',
    Quest = '/quest/:id',
    Booking ='/booking',
    Contacts = '/contacts',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
