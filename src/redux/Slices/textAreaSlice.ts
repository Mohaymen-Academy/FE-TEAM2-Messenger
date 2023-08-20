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
    setTextObj: (state: textAreaSliceType, action: { payload: any }) => {
      state.textObject = action.payload;
    },
  },
});

export const { setTextObj } = textAreaSlice.actions;

export default textAreaSlice.reducer;
