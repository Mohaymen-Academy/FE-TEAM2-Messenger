import { combineReducers } from "@reduxjs/toolkit";
import {
  appSliceReducer,
  conversationSliceReducer,
  messageSliceReducer,
  profileSliceReducer,
  userSliceReducer,
  logOutModalSliceReducer,
  textAreaSliceReducer,
} from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
  message: messageSliceReducer,
  profile: profileSliceReducer,
  user: userSliceReducer,
  logOutModal: logOutModalSliceReducer,
  textArea: textAreaSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
