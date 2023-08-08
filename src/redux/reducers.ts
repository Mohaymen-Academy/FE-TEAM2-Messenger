import { combineReducers } from "@reduxjs/toolkit";
import { appSliceReducer, conversationSliceReducer } from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
});

export default rootReducer;
