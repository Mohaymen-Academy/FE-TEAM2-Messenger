import { combineReducers } from "@reduxjs/toolkit";
import {
  appSliceReducer,
  conversationSliceReducer,
  messageSliceReducer,
  profileSliceReducer,
  userSliceReducer,
  logOutModalSliceReducer
} from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
  message: messageSliceReducer,
  profile: profileSliceReducer,
  user: userSliceReducer,
  logOutModal : logOutModalSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
