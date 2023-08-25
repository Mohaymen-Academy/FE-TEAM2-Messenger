import { subTypes } from "@/utils/types";
import apiCall from "../axiosInstance";

const getSubs = (id: number) => {
  return apiCall.get<subTypes[]>(`/api/subs/chat-subs/${id}`);
};
const setLastMessageSeen = (id: number) => {
  return apiCall.put(`api/subs/set-last-seen/${id}`);
};

export { getSubs, setLastMessageSeen };
