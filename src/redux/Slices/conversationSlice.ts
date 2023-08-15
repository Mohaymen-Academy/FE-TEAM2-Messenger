import { createSlice } from "@reduxjs/toolkit";

export type conversationSliceType = {
  section: "groupCreate" | "channelCreate" | "conversations" | "pvCreate";
  showConversations: boolean;
  createState: "groupCreate" | "channelCreate" | "";
};

const initialState: conversationSliceType = {
  section: "conversations",
  showConversations: true,
  createState: "",
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
      console.log('called')
      state.showConversations = !state.showConversations;
    },
    setCreateState: (
      state: conversationSliceType,
      action: { payload: { state: "groupCreate" | "channelCreate" | "" } }
    ) => {
      state.createState = action.payload.state;
    },
  },
});

export const { setSection, toggleShowConversations, setCreateState } =
  conversationSlice.actions;

export default conversationSlice.reducer;
