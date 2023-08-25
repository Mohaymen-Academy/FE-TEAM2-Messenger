import { ConversationTypes, chatType } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SearchResult = number[];

export type appSliceType = {
  theme: "light" | "dark";
  showEmoji: boolean;
  showUploadMenu: boolean;

  filterBy: "GROUP" | "PV" | "CHANNEL" | SearchResult | undefined;
  selectedProfile: selectedProfileType;
  selectedConversation: selectedConversationType;
  headerReRender: number;
  profileImageURL: string;
};

type selectedConversationType = {
  conversationId?: number;
  conversationType?: "GROUP" | "PV" | "CHANNEL";
};
type selectedProfileType = {
  conversationId?: number;
  conversationType?: chatType;
  userId?: number;
  imageUrl?: string;
  profileType?: "CHANNEL" | "CURRENT_USER" | "PV" | "GROUP" | "SAVED_MESSAGE";
};

const initialState: appSliceType = {
  theme: "dark",
  showEmoji: false,
  showUploadMenu: false,
  filterBy: undefined,
  selectedProfile: {
    conversationId: undefined,
    conversationType: undefined,
    userId: undefined,
  },
  selectedConversation: {
    conversationId: undefined,
    conversationType: undefined,
  },
  headerReRender: Date.now(),
  profileImageURL: "",
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
          selectedProfile: selectedProfileType;
        };
      }
    ) => {
      state.selectedProfile = action.payload.selectedProfile;
    },
    setFileterBy: (
      state: appSliceType,
      action: PayloadAction<typeof state.filterBy>
    ) => {
      state.filterBy = action.payload;
    },
    setHeaderReRender: (state: appSliceType) => {
      state.headerReRender = Date.now();
    },
    setProfileImageURL: (
      state: appSliceType,
      action: PayloadAction<string>
    ) => {
      state.profileImageURL = action.payload;
    },
  },
});

export const {
  toggleTheme,
  onToggleEmoji,
  onToggleUpload,
  setSelectedProfile,
  setFileterBy,
  setHeaderReRender,
  setProfileImageURL,
} = appSlice.actions;

export default appSlice.reducer;
