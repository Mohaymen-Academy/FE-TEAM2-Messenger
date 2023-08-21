import apiCall from "../axiosInstance";

const getContactSearchResult = async (name: string) => {
  return apiCall.get(`api/search/contact/${name}`);
};

export { getContactSearchResult };
