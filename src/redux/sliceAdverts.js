import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const sliceAdverts = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAdverts.pending]: handlePending,
    [fetchAdverts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAdverts.rejected]: handleRejected,
  },
});

export const advertsReducer = sliceAdverts.reducer;
