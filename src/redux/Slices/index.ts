import appSliceReducer from "./appSlice";
import { appSliceType } from "./appSlice";

import conversationSliceReducer from "./conversationSlice";
import { conversationSliceType } from "./conversationSlice";

import profileSliceReducer from "./profileSlice";
import { profileSliceType } from "./profileSlice";

import userSliceReducer from "./userSlice";
import { userSliceType } from "./userSlice";

export {
  appSliceReducer,
  conversationSliceReducer,
  profileSliceReducer,
  userSliceReducer,
};
export type {
  appSliceType,
  conversationSliceType,
  profileSliceType,
  userSliceType,
};
