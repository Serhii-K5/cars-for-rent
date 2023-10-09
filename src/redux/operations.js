import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65215831a4199548356d1630.mockapi.io/api/v1/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
