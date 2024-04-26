import { DetailedQuest, QuestFormData, ReservedQuest, State } from '../../types/state';
import { NameSpace } from '../../const';
import { BookingInfo } from '../../types/booking-info';
import { QuestsCard } from '../../types/quest-card';

export const getQuests = (state: Pick <State, NameSpace.Booking>): QuestsCard[] =>
  state[NameSpace.Booking].quests;

export const getDetailedQuest = (state: Pick <State, NameSpace.Booking>): DetailedQuest =>
  state[NameSpace.Booking].detailedQuest;

export const getBookingQuestInfo = (state: Pick <State, NameSpace.Booking>): BookingInfo[] =>
  state[NameSpace.Booking].bookingInfo;

export const getBookingInfoLoadingStatus = (state: Pick<State, NameSpace.Booking>): boolean =>
  state[NameSpace.Booking].bookingIsLoading;

export const getSelectedQuestPlaceId = (state: Pick<State, NameSpace.Booking>): string =>
  state[NameSpace.Booking].selectedQuestPlaceId;

export const getSelectedQuestPlace = (state: Pick<State, NameSpace.Booking>): BookingInfo =>
  state[NameSpace.Booking].selectedQuestPlace;

export const getIsWithChildrenFormData = (state: Pick<State, NameSpace.Booking>): boolean =>
  state[NameSpace.Booking].questFormData.withChildren;

export const getQuestFormData = (state: Pick<State, NameSpace.Booking>): QuestFormData =>
  state[NameSpace.Booking].questFormData;

export const getReservedQuests = (state: Pick<State, NameSpace.Booking>): ReservedQuest[] =>
  state[NameSpace.Booking].reservedQuests;
