import { createSlice } from "@reduxjs/toolkit";
import { store } from "./store";

const initialState = {
  theme: "light",
};

const settingsSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
