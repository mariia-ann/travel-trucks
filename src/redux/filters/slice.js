import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  location: "",
  AC: false,
  transmission: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return filtersInitialState;
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
