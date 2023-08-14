import appSliceReducer from "./appSlice";
import { appSliceType } from "./appSlice";

import conversationSliceReducer from "./conversationSlice";
import { conversationSliceType } from "./conversationSlice";

import messageSliceReducer from "./messageSlice";
import { messageSliceType } from "./messageSlice";

import profileSliceReducer from "./profileSlice";
import { profileSliceType } from "./profileSlice";

export {
  appSliceReducer,
  conversationSliceReducer,
  messageSliceReducer,
  profileSliceReducer,
};

export type {
  appSliceType,
  conversationSliceType,
  messageSliceType,
  profileSliceType,
};
