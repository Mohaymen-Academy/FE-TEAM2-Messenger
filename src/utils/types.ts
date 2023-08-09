import { appSliceType, conversationSliceType } from "@/redux/Slices";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
};

export type User = {
  name: string;
};
