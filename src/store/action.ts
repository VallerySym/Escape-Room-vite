import { createAction } from '@reduxjs/toolkit';

export const setActiveGenre = createAction('main/setActiveGenre', (value: string)=>({payload: value}));
export const getQuests = createAction('main/getQuests');

