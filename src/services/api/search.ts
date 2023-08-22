import apiCall from "../axiosInstance";

const getContactSearchResult = async (
  searchParam: string,
  searchIn: "CONTACT" | "CONVERSATION"
) => {
  const name = searchParam.split("/").join("");
  return name.trim().length !== 0 && searchIn === "CONTACT"
    ? apiCall.get(`api/search/contact/${name}`)
    : apiCall.get(`api/search/chat/${name}`);
};

export { getContactSearchResult };
