import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
    ],
  },
  filters: {
    status: "all",
  },
};

const rootReducer = (state = initialState) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
