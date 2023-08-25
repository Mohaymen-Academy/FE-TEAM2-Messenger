import { subTypes } from "@/utils/types";
import apiCall from "../axiosInstance";

const getSubs = (id: number) => {
  return apiCall.get<subTypes[]>(`/api/subs/chat-subs/${id}`);
};
const setLastMessageSeen = (id: number) => {
  return apiCall.put(`/api/subs/set-last-seen/${id}`);
};

const removeUserFromChat = async (subId: number) => {
  return apiCall.delete(`/api/subs/delete-sub/${subId}`);
};

export { getSubs, setLastMessageSeen, removeUserFromChat };
