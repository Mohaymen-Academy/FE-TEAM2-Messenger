import {
  appSliceType,
  conversationSliceType,
  profileSliceType,
  messageSliceType,
  userSliceType,
  textAreaSliceType,
  ModalSliceType,
} from "@/redux/Slices";

export type StoreStateTypes = {
  app: appSliceType;
  conversation: conversationSliceType;
  message: messageSliceType;
  profile: profileSliceType;
  user: userSliceType;
  textArea: textAreaSliceType;
  modal: ModalSliceType;
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

export type subTypes = {
  admin: boolean;
  firstName: string;
  lastName: string;
  lastSeen: string;
  profile: {
    id: number;
    media: media;
    setAt: string;
  };

  userId: number;
};

export type ConversationTypes = {
  chatId: number;
  chatType: chatType;
  lastMessage: string;
  media: media;
  sentAt: string;
  title: string;
  unSeenMessages: number;
  userFirstName: string;
};

export type ChatTypes = {
  bio: string;
  chatId: number;
  chatType: chatType;
  link: string;
  ownerId: number;
  permissions: permissionType[];
  profileDtoList: {
    id: number;
    media: media;
    setAt: string;
  };

  public: boolean;
  subCount: number;
  title: string;
};

// export type FullChatTypes = {
//   bio: string;
//   chatId: number;
//   chatType: chatType;
//   link: string;
//   ownerId: number;
//   permissions: permissionType;
//   profileDtoList: {
//     id: number;
//     media: media;
//     setAt: string;
//   };

//   public: boolean;
//   subCount: number;
//   title: string;
// };

export type MessageTypes = {
  editedAt: string;
  media: media;
  messageId: number;
  sendAt: string;
  text: string;
  userId: number;
  isCache?: boolean;
  seen?: boolean;
};

export type ContactTypes = {
  firstName: string;
  id: number;
  lastName: string | null;
  secondUserId: number;
  lastSeen: string;
};

export type media = {
  mediaId: number;
  fileName: string;
  fileMimeType: string;
  filePath: string;
};
export type chatType = "CHANNEL" | "GROUP" | "PV";
export type MessageStatus = "SEEN" | "DELIVERED" | "PENDING";
export type permissionType =
  | "PIN_MESSAGE"
  | "CHANGE_CHAT_INFO"
  | "ADMIN"
  | "SEND_MESSAGE"
  | "ADD_USER";
