import {
  appSliceType,
  conversationSliceType,
  profileSliceType,
  messageSliceType,
  userSliceType,
  logOutModalSliceType,
  textAreaSliceType,
  UploadModalSliceType,
} from "@/redux/Slices";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
  message: messageSliceType;
  profile: profileSliceType;
  user: userSliceType;
  logOutModal: logOutModalSliceType;
  uploadModal: UploadModalSliceType;
  textArea: textAreaSliceType;
};

export type UserTypes = {
  bio?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  userId?: string | number;
  userName?: string;
};

export type ConversationTypes = {
  chatId: number | string;
  chatType: "CHANNEL" | "GROUP" | "PV";
  lastMessage: string;
  media: any;
  sentAt: string;
  title: string;
  unSeenMessages: number;
  userFirstName: string;
};

export type MessageTypes = {
  editedAt: string;
  // media: {
  //   mediaId: 24;
  //   fileName: "dolor_id/hic.flac";
  //   fileMimeType: "text/javascript";
  //   filePath: "./klkom/ztytvey";
  // };
  media: any;
  messageId: string | number;
  sendAt: string;
  text: string;
  userId: string | number;
};

export type ContactTypes = {
  firstName: string;
  id: string | number;
  lastName: string | null;
  secondUserId: string | number;
};
export type MessageStatus = "SEEN" | "DELIVERED" | "PENDING";
