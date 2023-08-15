import axios from "axios";
// import { getAccessTokenApi } from '../authApi';

const apiCall = axios.create({ baseURL: "http://192.168.70.233:8080/" });

// Request interceptor for API calls
apiCall.interceptors.request.use(
  async (req) => {
    req.headers["Authorization"] = localStorage.getItem("accessToken");
    req.headers["Accept"] = "*/*";
    req.headers["Content-Type"] = "*/*";

    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
apiCall.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    if (
      (error?.response?.status === 403 || error?.response?.status === 401) &&
      !prevRequest?.sent
    ) {
      prevRequest.sent = true;
      // const data = await getAccessTokenApi(
      //   localStorage.getItem("refreshToken") || ""
      // );
      // const token = data.data.data.accessToken;

      //set new token
      // localStorage.setItem("accessToken", token);
      // axios.defaults.headers.common["x-auth-token"] = token;

      return apiCall(prevRequest);
    }
    return Promise.reject(error);
  }
);

export default apiCall;
