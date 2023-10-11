import { createSlice } from "@reduxjs/toolkit";

const sliceFavorite = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorites(state, action) {
      state.items.push(action.payload);
    },
    deleteFavorites(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addFavorites, deleteFavorites } = sliceFavorite.actions;
export const favoriteReducer = sliceFavorite.reducer;
