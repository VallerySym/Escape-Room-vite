import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BookingProcess, DetailedQuest, QuestFormData } from '../../types/state';
import { fetchBookingQuestInfo, fetchDetailedQuest, fetchReservedQuests } from '../api-actions';
import { QUEST_TYPES } from '../../const';
import { BookingInfo } from '../../types/booking-info';

const initialDetailedQuest: DetailedQuest = {
  id: '',
  title: '',
  previewImg: '',
  previewImgWebp: '',
  level: '',
  type: '',
  peopleMinMax: [],
  description: '',
  coverImg: '',
  coverImgWebp: '',
};

const initialQuestPlace: BookingInfo = {
  id: '',
  location: {
    coords: [],
    address: ''
  },
  slots: {
    today: [],
    tomorrow:[],
  }
};

const initialFormData: QuestFormData = {
  date: '',
  time: '',
  contactPerson: '',
  phone: '',
  withChildren: false,
  peopleCount: 0,
  placeId: '',
};

const initialState: BookingProcess = {
  quests: [],
  detailedQuest: initialDetailedQuest,
  bookingInfo: [],
  bookingIsLoading: false,
  selectedQuestPlaceId: '',
  selectedQuestPlace: initialQuestPlace,
  questFormData: initialFormData,
  reservedQuests: [],
  questType: QUEST_TYPES['all-quests']
};

export const bookingSlice = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    setQuestPlaceId: (state, action: PayloadAction<string>) => {
      state.selectedQuestPlaceId = action.payload;
    },
    setSelectedQuestPlace: (state, action: PayloadAction<BookingInfo>) => {
      state.selectedQuestPlace = action.payload;
    },
    setFormDate: (state, action: PayloadAction<string>) => {
      state.questFormData.date = action.payload;
    },
    setFormTime: (state, action: PayloadAction<string>) => {
      state.questFormData.time = action.payload;
    },
    setFormPerson: (state, action: PayloadAction<string>) => {
      state.questFormData.contactPerson = action.payload;
    },
    setFormPhone: (state, action: PayloadAction<string>) => {
      state.questFormData.phone = action.payload;
    },
    setFormChildren: (state) => {
      state.questFormData.withChildren = !state.questFormData.withChildren;
    },
    setFormPeopleCount: (state, action: PayloadAction<number>) => {
      state.questFormData.peopleCount = action.payload;
    },
    setFormPlaceId: (state, action: PayloadAction<string>) => {
      state.questFormData.placeId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDetailedQuest.fulfilled, (state, action) => {
        state.detailedQuest = action.payload;
      })
      .addCase(fetchBookingQuestInfo.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
        state.bookingIsLoading = true;
      })
      .addCase(fetchBookingQuestInfo.pending, (state) => {
        state.bookingIsLoading = false;
      })
      .addCase(fetchReservedQuests.fulfilled, (state, action) => {
        state.reservedQuests = action.payload;
      });
  }
});

export const {setQuestPlaceId, setSelectedQuestPlace, setFormChildren,
  setFormDate, setFormPeopleCount, setFormPerson, setFormPhone, setFormPlaceId, setFormTime} = bookingSlice.actions;

