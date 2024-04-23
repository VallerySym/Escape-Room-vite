import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestById } from '../api-actions';
import { QuestProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: QuestProcess = {
    questData: null,
    loadingStatus: false,
    errorStatus: false,
};

export const QuestSlice = createSlice({
    name: NameSpace.Quest,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchQuestById.pending, (state) => {
                state.errorStatus = false;
                state.loadingStatus = true;
            })
            .addCase(fetchQuestById.fulfilled, (state, action) => {
                state.questData = action.payload;
                state.loadingStatus = false;
            })
            .addCase(fetchQuestById.rejected, (state) => {
                state.loadingStatus = false;
                state.errorStatus = true;
            });
    }
});


export const questReducer = QuestSlice.reducer;
