import {
  appSliceType,
  conversationSliceType,
  profileSliceType,
} from "@/redux/Slices";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
  profile: profileSliceType;
};

export type User = {
  name: string;
};
