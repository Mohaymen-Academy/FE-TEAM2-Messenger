import { ConversationTypes, permissionType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export type conversationSliceType = {
  section:
    | "contactCreate"
    | "groupCreate"
    | "channelCreate"
    | "conversations"
    | "pvCreate";
  showConversations: boolean;
  createState: "groupCreate" | "channelCreate" | "contactCreate" | "";
  selectedConversation: ConversationTypes | undefined;
  selectedConversationUserPermission: permissionType[] | undefined;
};

const initialState: conversationSliceType = {
  section: "conversations",
  showConversations: true,
  createState: "",
  selectedConversation: undefined,
  selectedConversationUserPermission: [],
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
            | "contactCreate"
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
    setSelectedConversationUserPermission: (
      state: conversationSliceType,
      action: { payload: { permissions?: permissionType[] } }
    ) => {
      state.selectedConversationUserPermission = action.payload.permissions;
    },
  },
});

export const {
  setSection,
  toggleShowConversations,
  setCreateState,
  setSelectedConversation,
  setSelectedConversationUserPermission,
} = conversationSlice.actions;

export default conversationSlice.reducer;
