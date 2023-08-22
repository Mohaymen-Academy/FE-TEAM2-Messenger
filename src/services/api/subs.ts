import apiCall from "../axiosInstance";

const getSubs = (id: number) => {
  return apiCall.post(`/api/subs/chat-subs/${id}`);
};

export { getSubs };
