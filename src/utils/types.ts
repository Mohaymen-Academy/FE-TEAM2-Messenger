import {
  appSliceType,
  conversationSliceType,
  profileSliceType,
  messageSliceType,
  userSliceType,
} from "@/redux/Slices";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
  message: messageSliceType;
  profile: profileSliceType;
  user: userSliceType;
};

export type User = {
  bio: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userId: string | number;
  userName: string;
};

export type ChatItem = {
  chatId: number | string;
  lastMessage: string;
  media: any;
  title: string;
  userFirstName: string;
};
export type MessageStatus = "SEEN" | "DELIVERED" | "PENDING"
