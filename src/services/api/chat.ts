import apiCall from "../axiosInstance";
import { CreateChannelType } from "./types";

const getAllChat = async () => {
  return apiCall.get("/api/chats/get-all-chats");
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
  console.log("called with:", body);
  return apiCall.post("/api/chats/create-chat", body);
};

const getContacts = async () => {
  return apiCall.get("/api/contacts/get-contacts");
};

export { getAllChat, createChat, getContacts };
