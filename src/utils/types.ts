import {
  appSliceType,
  conversationSliceType,
  profileSliceType,
  userSliceType,
} from "@/redux/Slices";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
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
