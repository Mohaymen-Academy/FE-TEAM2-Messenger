import { combineReducers } from "@reduxjs/toolkit";
import {
  appSliceReducer,
  conversationSliceReducer,
  profileSliceReducer,
  userSliceReducer,
} from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
  profile: profileSliceReducer,
  user: userSliceReducer,
});

export default rootReducer;
