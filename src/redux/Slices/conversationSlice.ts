import { createSlice } from "@reduxjs/toolkit";

export type conversationSliceType = {
  section: string;
  showConversations: boolean;
};

const initialState: conversationSliceType = {
  section: "conversations",
  showConversations: true,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setSection: (
      state: conversationSliceType,
      actions: {
        payload: {
          selectedState:
            | "groupCreate"
            | "channelCreate"
            | "pvCreate"
            | "conversations";
        };
      }
    ) => {
      state.section = actions.payload.selectedState;
    },
    toggleShowConversations: (state: conversationSliceType, _) => {
      state.showConversations = !state.showConversations;
    },
  },
});

export const { setSection, toggleShowConversations } =
  conversationSlice.actions;

export default conversationSlice.reducer;
