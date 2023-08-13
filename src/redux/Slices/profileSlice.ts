import { createSlice } from "@reduxjs/toolkit";

export type profileSliceType = {
  section: "personal" | "group" | "channel";
  show: boolean;
};

const initialState: profileSliceType = {
  section: "personal",
  show: true,
};

const profileSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setSection: (
      state: profileSliceType,
      actions: {
        payload: {
          selectedState: "personal" | "group" | "channel";
        };
      }
    ) => {
      state.section = actions.payload.selectedState;
    },
    setShow: (
      state: profileSliceType,
      actions: {
        payload: {
          show: boolean;
        };
      }
    ) => {
      state.show = actions.payload.show;
    },
  },
});

export const { setSection, setShow } = profileSlice.actions;

export default profileSlice.reducer;
