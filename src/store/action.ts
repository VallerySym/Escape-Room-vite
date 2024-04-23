import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, AppRoute } from '../const';

export const setActiveGenre = createAction('main/setActiveGenre', (value: string)=>({payload: value}));
export const getQuests = createAction('main/getQuests');
export const setError = createAction('setError');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');