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
  userId?: number;
  userName?: string;
  lastSeen?: string;
};

export type ConversationTypes = {
  chatId: number;
  chatType: "CHANNEL" | "GROUP" | "PV";
  lastMessage: string;
  media: {
    mediaId: number;
    fileName: string;
    fileMimeType: string;
    filePath: string;
  };
  sentAt: string;
  title: string;
  unSeenMessages: number;
  userFirstName: string;
};

export type ChatTypes = {
  bio: string;
  chatId: number;
  chatType: "CHANNEL" | "GROUP" | "PV";
  link: string;
  ownerId: number;
  profileDtoList: any[];
  public: boolean;
  subCount: number;
  title: string;
};

export type MessageTypes = {
  editedAt: string;
  media: {
    mediaId: number;
    fileName: string;
    fileMimeType: string;
    filePath: string;
  };
  messageId: number;
  sendAt: string;
  text: string;
  userId: number;
  isCache?: boolean;
};

export type ContactTypes = {
  firstName: string;
  id: number;
  lastName: string | null;
  secondUserId: number;
  lastSeen: string;
};
export type MessageStatus = "SEEN" | "DELIVERED" | "PENDING";
