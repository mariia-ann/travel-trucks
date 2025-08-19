import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filters/slice.js';
import { campersReducer } from './campers/slice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
  },
});