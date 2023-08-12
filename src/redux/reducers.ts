import { combineReducers } from "@reduxjs/toolkit";
import {
  appSliceReducer,
  conversationSliceReducer,
  profileSliceReducer,
} from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
  profile: profileSliceReducer,
});

export default rootReducer;
