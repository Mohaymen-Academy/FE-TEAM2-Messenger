import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
