import { createSlice } from "@reduxjs/toolkit";

export type appSliceType = {
  theme: string;
};

const initialState = {
  theme: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state: appSliceType) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = appSlice.actions;

export default appSlice.reducer;
