import { User } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export type textAreaSliceType = {
  textObject: any;
};

const initialState: textAreaSliceType = {
  textObject: {},
};

const textAreaSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTextStyle: (state: textAreaSliceType, action: { payload: any }) => {
      state.textObject = action.payload;
    },
  },
});

export const { setTextStyle } = textAreaSlice.actions;

export default textAreaSlice.reducer;
