import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = () => {
  try {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: savedFavorites(),
  reducers: {
    addFavorite: (state, action) => {
      if (!state.includes(action.payload)) state.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite: (state, action) => {
      const newState = state.filter(id => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
