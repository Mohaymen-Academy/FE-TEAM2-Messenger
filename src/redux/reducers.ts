import { combineReducers } from "@reduxjs/toolkit";
import {
  appSliceReducer,
  conversationSliceReducer,
  messageSliceReducer,
  profileSliceReducer,
  userSliceReducer,
  logOutModalSliceReducer,
  textAreaSliceReducer,
  UploadModalSliceReducer,
} from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
  message: messageSliceReducer,
  profile: profileSliceReducer,
  user: userSliceReducer,
  logOutModal: logOutModalSliceReducer,
  uploadModal: UploadModalSliceReducer,
  textArea: textAreaSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
