import { createSlice } from "@reduxjs/toolkit";

export type logOutModalSliceType = {
  isOpen : boolean;
  
};

const initialState: logOutModalSliceType = {
  isOpen: true,
};

const logOutModalSlice = createSlice({
  name: "user",
  initialState : {isOpen : false},
  reducers: {
    onOpen: (state: logOutModalSliceType,) => {
      state.isOpen = true;
    },
     onClose: (state: logOutModalSliceType,) => {
      state.isOpen = false;
    },
  },
});

export const { onClose ,onOpen } = logOutModalSlice.actions;

export default logOutModalSlice.reducer;
