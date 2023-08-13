import { appSliceType, conversationSliceType } from "@/redux/Slices";
import { messageSliceType } from "@/redux/Slices/messageSlice";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
  message: messageSliceType;
};

export type User = {
  name: string;
};
