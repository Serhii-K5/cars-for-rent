// redux/dataSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "./api";

export const fetchDataWithPagination = createAsyncThunk(
  "data/fetchDataWithPagination",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const data = await api.fetchData(page, limit);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataWithPagination.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchDataWithPagination.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchDataWithPagination.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
