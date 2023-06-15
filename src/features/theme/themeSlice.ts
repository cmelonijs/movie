import { createSlice } from "@reduxjs/toolkit";

type ThemeState = boolean;

const initialState: ThemeState = false;

const themeFromLocalStorage = !!localStorage.getItem("movie-theme");

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state) {
        localStorage.removeItem("movie-theme");
      } else {
        localStorage.setItem("movie-theme", "_");
      }
      return !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
