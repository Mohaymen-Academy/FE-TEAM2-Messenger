import { UserTypes } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export type userSliceType = {
  enteredPhoneNumber: string;
  user: UserTypes;
};

const initialState: userSliceType = {
  enteredPhoneNumber: "",
  user: {
    bio: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    userId: 0,
    userName: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEnteredPhoneNumber: (
      state: userSliceType,
      actions: {
        payload: {
          phone: string;
        };
      }
    ) => {
      state.enteredPhoneNumber = actions.payload.phone;
    },
    setUser: (
      state: userSliceType,
      actions: {
        payload: UserTypes;
      }
    ) => {
      state.user = actions.payload;
    },
    emptyUser: (state: userSliceType) => {
      state.user = {
        bio: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        userId: 0,
        userName: "",
      };
      state.enteredPhoneNumber = "";
    },
  },
});

export const { setEnteredPhoneNumber, setUser, emptyUser } = userSlice.actions;

export default userSlice.reducer;
