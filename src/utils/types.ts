import {
  appSliceType,
  conversationSliceType,
  profileSliceType,
  messageSliceType,
} from "@/redux/Slices";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
  message: messageSliceType;
  profile: profileSliceType;
};

export type User = {
  name: string;
};
