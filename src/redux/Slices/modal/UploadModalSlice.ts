import { createSlice } from "@reduxjs/toolkit";

export type UploadModalSliceType = {
  isOpen: boolean;
};

const UploadModalSlice = createSlice({
  name: "uploadModal",
  initialState: { isOpen: true },
  reducers: {
    onOpen: (state: UploadModalSliceType) => {
      state.isOpen = true;
    },
    onClose: (state: UploadModalSliceType) => {
      state.isOpen = false;
    },
  },
});

export const { onClose, onOpen } = UploadModalSlice.actions;

export default UploadModalSlice.reducer;
