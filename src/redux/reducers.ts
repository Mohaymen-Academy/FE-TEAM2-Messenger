import { combineReducers } from "@reduxjs/toolkit";
import {
  appSliceReducer,
  conversationSliceReducer,
  messageSliceReducer,
  profileSliceReducer,
  userSliceReducer,
  textAreaSliceReducer,
  ModalSliceReducer,
} from "./Slices";

const rootReducer = combineReducers({
  conversation: conversationSliceReducer,
  app: appSliceReducer,
  message: messageSliceReducer,
  profile: profileSliceReducer,
  user: userSliceReducer,
  textArea: textAreaSliceReducer,
  modal: ModalSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
