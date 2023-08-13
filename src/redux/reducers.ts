import { combineReducers } from "@reduxjs/toolkit";
import {
  appSliceReducer,
  conversationSliceReducer,
  messageSliceReducer,
} from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
  message: messageSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
