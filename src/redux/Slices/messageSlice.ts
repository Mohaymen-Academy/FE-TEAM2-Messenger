import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type messageSliceType = {
  message: string;
  isSelected: boolean;
};

const initialState: messageSliceType = {
  message: "",
  isSelected: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setIsSelected: (
      state: messageSliceType,
      action: PayloadAction<boolean>
    ) => {
      state.isSelected = action.payload;
    },
  },
});

export const { setIsSelected } = messageSlice.actions;

export default messageSlice.reducer;
