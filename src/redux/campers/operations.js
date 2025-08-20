import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, filters }, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: {
          page,
          limit: 4,
          location: filters.location || undefined,
          AC: filters.AC ? "true" : undefined,
          transmission: filters.transmission ? "automatic" : undefined,
          kitchen: filters.kitchen ? "true" : undefined,
          TV: filters.TV ? "true" : undefined,
          bathroom: filters.bathroom ? "true" : undefined,
          form: filters.form || undefined,
          radio: filters.radio ? "true" : undefined,
          refrigerator: filters.refrigerator ? "true" : undefined,
          microwave: filters.microwave ? "true" : undefined,
          gas: filters.gas ? "true" : undefined,
          water: filters.water ? "true" : undefined,
        },
      });
      return response.data;
    } catch (e) {
      // if (e.response && e.response.status === 404) {
      //   return { items: [], total: 0, page};
      // }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchOneById",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
