import apiCall from "../axiosInstance";
import { CreateContactType } from "./types";

const getContacts = async () => {
  return apiCall.get(`/api/contacts/get-contacts`);
};

const createContact = (body: CreateContactType) => {
  return apiCall.post(`/api/contacts/add-contact`, body);
};

export { getContacts, createContact };
