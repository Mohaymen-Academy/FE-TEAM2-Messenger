import apiCall from "../axiosInstance";

const getSubs = (id: number) => {
  return apiCall.get(`/api/subs/chat-subs/${id}`);
};

export { getSubs };
