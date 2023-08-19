import { ConversationTypes } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export type conversationSliceType = {
  section: "groupCreate" | "channelCreate" | "conversations" | "pvCreate";
  showConversations: boolean;
  createState: "groupCreate" | "channelCreate" | "";
  selectedConversation: ConversationTypes | undefined;
};

const initialState: conversationSliceType = {
  section: "conversations",
  showConversations: true,
  createState: "",
  selectedConversation: undefined,
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
    toggleShowConversations: (state: conversationSliceType) => {
      state.showConversations = !state.showConversations;
    },
    setCreateState: (
      state: conversationSliceType,
      action: { payload: { state: "groupCreate" | "channelCreate" | "" } }
    ) => {
      state.createState = action.payload.state;
    },
    setSelectedConversation: (
      state: conversationSliceType,
      action: { payload: { conversation: ConversationTypes } }
    ) => {
      state.selectedConversation = action.payload.conversation;
    },
  },
});

export const {
  setSection,
  toggleShowConversations,
  setCreateState,
  setSelectedConversation,
} = conversationSlice.actions;

export default conversationSlice.reducer;
