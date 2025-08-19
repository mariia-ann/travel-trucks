import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: {
          location: filters.location || undefined,
          AC: filters.AC ? "true" : undefined,
          transmission: filters.transmission ? "automatic" : undefined,
          kitchen: filters.kitchen ? "true" : undefined,
          TV: filters.TV ? "true" : undefined,
          bathroom: filters.bathroom ? "true" : undefined,
          form: filters.form || undefined,
        },
      });
      return response.data;
    } catch (e) {
      if (e.response && e.response.status === 404) {
        return [];
      }
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
