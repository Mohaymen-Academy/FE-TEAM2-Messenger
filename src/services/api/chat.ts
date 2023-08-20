import apiCall from "../axiosInstance";
import { CreateChannelType } from "./types";
import { getMessageParamsType } from "./types";

const getAllChat = async () => {
  return apiCall.get("/api/chats/get-all-chats");
};
const getChat = async (chatId: string) => {
  return apiCall.get(`/api/chats/get-chat/${chatId}`);
};
const getMessages = async (getMessageParams: getMessageParamsType) => {
  return apiCall.get<object[]>(
    `/api/messages/get-messages/${getMessageParams.chatId}/${getMessageParams.floor}/${getMessageParams.ceil}`
  );
};
const sendMessage = async (messageFOrmData: FormData) => {
  return apiCall.post(`/api/messages/send-message`, messageFOrmData);
};
// const forgetPasswordApi = async (email: string) => {
//   return apiCall.post("/auth/forget-password", {
//     email,
//   });
// };
// const resetPasswordApi = async (password: string, token: string) => {
//   return apiCall.post("/auth/reset-password", {
//     password,
//     token,
//   });
// };

// const getAccessTokenApi = async (rToken: string) => {
//   return apiCall.post("/auth/refreshtoken", {
//     refreshToken: rToken,
//   });
// };

const createChat = async (body: CreateChannelType) => {
  return apiCall.post("/api/chats/create-chat", body);
};

export { getAllChat, createChat, getChat, getMessages, sendMessage };
