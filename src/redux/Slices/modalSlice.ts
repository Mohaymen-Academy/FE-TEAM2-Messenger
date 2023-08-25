import { createSlice } from "@reduxjs/toolkit";

export type ModalSliceType = {
  isUploadOpen: boolean;
  isSignOutOpen: boolean;
  isMediaOpen: boolean;
  isCropperOpen: boolean;
  mediaUrl: { url: string; name: string };
};

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    isUploadOpen: false,
    isSignOutOpen: false,
    isMediaOpen: false,
    isCropperOpen: false,
    mediaUrl: { url: "", name: "" },
  },
  reducers: {
    onUploadOpen: (state: ModalSliceType) => {
      state.isUploadOpen = true;
    },
    onUploadClose: (state: ModalSliceType) => {
      state.isUploadOpen = false;
    },
    onSignOutOpen: (state: ModalSliceType) => {
      state.isSignOutOpen = true;
    },
    onSignOutClose: (state: ModalSliceType) => {
      state.isSignOutOpen = false;
    },
    onCropperOpen: (state: ModalSliceType) => {
      state.isCropperOpen = true;
    },
    onCropperClose: (state: ModalSliceType) => {
      state.isCropperOpen = false;
    },
    onMediaOpen: (state: ModalSliceType) => {
      state.isMediaOpen = true;
    },
    onMediaClose: (state: ModalSliceType) => {
      state.isMediaOpen = false;
    },
    setMediaUrl: (
      state: ModalSliceType,
      action: { payload: { url: string; name: string } }
    ) => {
      state.mediaUrl = action.payload;
    },
  },
});

export const {
  onUploadOpen,
  onUploadClose,
  onSignOutOpen,
  onSignOutClose,
  onCropperOpen,
  onCropperClose,
  onMediaOpen,
  onMediaClose,
  setMediaUrl,
} = ModalSlice.actions;

export default ModalSlice.reducer;
