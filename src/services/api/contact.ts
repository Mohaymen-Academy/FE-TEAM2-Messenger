import apiCall from "../axiosInstance";

const getContacts = async () => {
  return apiCall.get(`/api/contacts/get-contacts`);
};

export { getContacts };
