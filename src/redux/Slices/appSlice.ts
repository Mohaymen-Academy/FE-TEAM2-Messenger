import { createSlice } from "@reduxjs/toolkit";

export type appSliceType = {
  theme: "light" | "dark";
  showEmoji: boolean;
};

const initialState: appSliceType = {
  theme: "dark",
  showEmoji: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state: appSliceType) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    onToggleEmoji: (
      state: appSliceType,
      action: { payload: { show: boolean } }
    ) => {
      state.showEmoji = action.payload.show;
    },
  },
});

export const { toggleTheme, onToggleEmoji } = appSlice.actions;

export default appSlice.reducer;
