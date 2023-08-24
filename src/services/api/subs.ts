import apiCall from "../axiosInstance";

const getSubs = (id: number) => {
  return apiCall.get(`/api/subs/chat-subs/${id}`);
};
const setLastMessageSeen = (id: number) => {
  return apiCall.put(`api/subs/set-last-seen/${id}`);
};

export { getSubs, setLastMessageSeen };
