import { createSlice } from "@reduxjs/toolkit";

export type conversationSliceType = {
  section: string;
};

const initialState = {
  section: "conversations",
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
            | "groupeCreate"
            | "channelCreate"
            | "pvCreate"
            | "conversations";
        };
      }
    ) => {
      state.section = actions.payload.selectedState;
    },
  },
});

export const { setSection } = conversationSlice.actions;

export default conversationSlice.reducer;
