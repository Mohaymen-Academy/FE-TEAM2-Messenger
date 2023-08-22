import { ConversationTypes, MessageTypes } from "@/utils/types";
import apiCall from "../axiosInstance";
import { CreateChannelType } from "./types";
import { getMessageParamsType } from "./types";

const getAllChat = async () => {
  return apiCall.get<ConversationTypes[]>("/api/chats/get-all-chats");
};
const getChat = async (chatId: any) => {
  return apiCall.get(`/api/chats/get-chat/${chatId}`);
};
const getMessages = async (getMessageParams: getMessageParamsType) => {
  return apiCall.get<MessageTypes[]>(
    `/api/messages/get-messages/${getMessageParams.chatId}/${getMessageParams.floor}/${getMessageParams.ceil}`
  );
};
const sendMessage = async (messageFOrmData: FormData) => {
  return apiCall.post(`/api/messages/send-message`, messageFOrmData);
};
const createChat = async (body: CreateChannelType) => {
  return apiCall.post("/api/chats/create-chat", body);
};

const getBinary = async (url: string) => {
  return apiCall.get(url, { responseType: "blob" });
};

const sendChatPicture = async (data: { formData: any; id: string }) => {
  return apiCall.post(`/api/profiles/chats/${data.id}`, data.formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export {
  getAllChat,
  createChat,
  getChat,
  getMessages,
  sendMessage,
  getBinary,
  sendChatPicture,
};
