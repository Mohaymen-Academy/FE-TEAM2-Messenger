import { UserTypes } from "@/utils/types";
import apiCall from "../axiosInstance";

const sendPicture = async (formData: any) => {
  return apiCall.post(`/api/profiles/users`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const updateInfo = async (body: {
  userId?: string | number;
  email?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  bio?: string;
}) => {
  return apiCall.put("api/users", body);
};

const getUser = async () => {
  return apiCall.get<UserTypes>("/api/users/get-current-user");
};
const getOtherUser = async (id?: number) => {
  if (!id) return null;
  return apiCall.get<UserTypes>(`/api/users/${id}`);
};
const getUserProfile = async (id?: number) => {
  if (!id) return null;
  return apiCall.get(`/api/profiles/users/${id}`);
};

const getUserByPhone = async (phone: string) => {
  return apiCall.get(`/api/users/by-phoneNumber/${phone}`);
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

export {
  sendPicture,
  updateInfo,
  getUser,
  getUserByPhone,
  getUserProfile,
  getOtherUser,
};
