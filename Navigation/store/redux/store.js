import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./FavoriteReducer";

export const store = configureStore({
  reducer: {
    favorite:favoriteReducer
  },
});
