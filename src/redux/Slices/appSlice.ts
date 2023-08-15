import { createSlice } from "@reduxjs/toolkit";

export type appSliceType = {
  theme: "light" | "dark";
  showEmoji: boolean;
  showUploadMenu: boolean;
};

const initialState: appSliceType = {
  theme: "dark",
  showEmoji: false,
  showUploadMenu: false,
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
    onToggleUpload: (
      state: appSliceType,
      action: { payload: { show: boolean } }
    ) => {
      state.showUploadMenu = action.payload.show;
    },
  },
});

export const { toggleTheme, onToggleEmoji, onToggleUpload } = appSlice.actions;

export default appSlice.reducer;
