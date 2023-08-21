import apiCall from "../axiosInstance";

const loginApi = async (phoneNumber: string) => {
  
  return apiCall.get(`api/auth/send-activation-code`, {
    params: { phoneNumber },
  });
};
const numberConfirmation = async (
  activationCode: string,
  phoneNumber: string
) => {
  return apiCall.post(`api/auth/login`, {
    phoneNumber,
    activationCode,
  });
};

// const registerUserApi = async (body: {
//   username: string;
//   email: string;
//   password: string;
//   firstname: string;
//   lastname: string;
// }) => {
//   return apiCall.get("api/auth/send-activation-code");
// };

// const forgetPasswordApi = async (email: string) => {
//   return apiCall.post("/auth/forget-password", {
//     email,
//   });
// };
// const resetPasswordApi = async (password: string, token: string) => {
//   return apiCall.post("/auth/reset-password", {
//     password,
//     token,
//   });
// };

// const getAccessTokenApi = async (rToken: string) => {
//   return apiCall.post("/auth/refreshtoken", {
//     refreshToken: rToken,
//   });
// };
export {
  // getAccessTokenApi,
  // forgetPasswordApi,
  loginApi,
  numberConfirmation,
  // registerUserApi,
  // resetPasswordApi,
};
