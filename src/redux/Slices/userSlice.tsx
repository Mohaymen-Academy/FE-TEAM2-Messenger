import { User } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

export type userSliceType = {
  enteredPhoneNumber: string;
  user: User;
};

const initialState: userSliceType = {
  enteredPhoneNumber: "",
  user: {
    bio: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    userId: "",
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
        payload: {
          user: User;
        };
      }
    ) => {
      state.user = actions.payload.user;
    },
  },
});

export const { setEnteredPhoneNumber, setUser } = userSlice.actions;

export default userSlice.reducer;
