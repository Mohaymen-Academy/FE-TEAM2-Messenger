import { createSlice } from "@reduxjs/toolkit";

export type appSliceType = {
  theme: "light" | "dark";
  showEmoji: boolean;
  showUploadMenu: boolean;
  selectedProfile: {
    conversationId: string | undefined;
    conversationType: "GROUP" | "PV" | "CHANNEL" | undefined;
  };
  
};

const initialState: appSliceType = {
  theme: "dark",
  showEmoji: false,
  showUploadMenu: false,
  selectedProfile: { conversationId: undefined, conversationType: undefined },
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
    setSelectedProfile: (
      state: appSliceType,
      action: {
        payload: {
          selectedProfile: {
            conversationId: string | undefined;
            conversationType: "GROUP" | "PV" | "CHANNEL" | undefined;
          };
        };
      }
    ) => {
      state.selectedProfile= action.payload.selectedProfile;
    },
  },
});

export const { toggleTheme, onToggleEmoji, onToggleUpload, setSelectedProfile } = appSlice.actions;

export default appSlice.reducer;
