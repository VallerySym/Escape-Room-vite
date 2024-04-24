import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { saveToken, dropToken } from '../services/token';
import { AppDispatch, DetailedQuest, PostData, ReservedQuest, State } from '../types/state';
import { Quest } from '../types/quest';
import { QuestsCard } from '../types/quest-card';
import { UserData, AuthInfo } from '../types/user-data';
import { APIRoute } from '../const';
import { BookingInfo } from '../types/booking-info';
import { setFormPlaceId, setSelectedQuestPlace } from './booking-process/booking-process.slice';

export const fetchQuests = createAsyncThunk<QuestsCard[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'quests/fetchQuests',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<QuestsCard[]>(APIRoute.Quests);

    return data;
  }
);

export const fetchQuestById = createAsyncThunk<Quest, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'quests/fetchQuestById',
  async (id, { extra: api }) => {
    const { data } = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchBookingQuestInfo = createAsyncThunk<BookingInfo[], DetailedQuest['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'quests/fetchBookingQuestInfo',
  async(id, {dispatch, extra: api }) => {
    const {data} = await api.get<BookingInfo[]>(`${APIRoute.Quests}/${id}/booking`);
    dispatch(fetchDetailedQuest(id));
    dispatch(setSelectedQuestPlace(data[0]));
    dispatch(setFormPlaceId(data[0].id));
    return data;
  });

export const fetchDetailedQuest = createAsyncThunk<DetailedQuest, DetailedQuest['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'quests/fetchDetailedQuest',
  async (id, { extra: api }) => {
    const { data } = await api.get<DetailedQuest>(`${APIRoute.Quests}/${id}`);
    return data;
  }
);

export const postFormData = createAsyncThunk<PostData, PostData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postFormData',
  async ({ postData, id }, { extra: api }) => {
    const { data } = await api.post<PostData>(`${APIRoute.Quests}/${id}/booking`, postData);
    return data;
  }
);

export const fetchReservedQuests = createAsyncThunk<ReservedQuest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReservedQuests',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<ReservedQuest[]>(APIRoute.MyQuests);
    return data;
  }
);