import { buildCreateApi } from '@reduxjs/toolkit/query';
import { BoxTypeDb } from '../../types/boxTypes';
import { createSlice } from '@reduxjs/toolkit';
import { addBoxThunk, deleteBoxThunk, getBoxesThunk } from './boxThunk';

type BoxState = {
  boxes: BoxTypeDb[];
};

const initialState: BoxState = {
  boxes: [],
};

export const boxSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBoxesThunk.fulfilled, (state, { payload }) => {
      state.boxes = payload;
    });
    builder.addCase(addBoxThunk.fulfilled, (state, { payload }) => {
      state.boxes = [payload, ...state.boxes];
    });
    builder.addCase(deleteBoxThunk.fulfilled, (state, { payload }) => {
      const index = state.boxes.findIndex((el) => el.id === payload);
      state.boxes.splice(index, 1);
    });
  },
});

export default boxSlice.reducer;
