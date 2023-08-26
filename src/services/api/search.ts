import apiCall from "../axiosInstance";

const getChatSearchResult = async (searchParam: string) => {
  return apiCall.get(`/api/search/chat/${searchParam}`);
};

const getContactSearchResult = async (searchParam: string) => {
  return apiCall.get(`/api/search/contact/${searchParam}`);
};

export { getChatSearchResult, getContactSearchResult };
