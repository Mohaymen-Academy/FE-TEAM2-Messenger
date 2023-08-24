import { MessageTypes } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type messageSliceType = {
  message: string;
  isSelected: boolean;
  optimisticCache: Record<string, MessageTypes[]>;
};

const initialState: messageSliceType = {
  message: "",
  isSelected: false,
  optimisticCache: {},
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setIsSelected: (
      state: messageSliceType,
      action: PayloadAction<boolean>
    ) => {
      state.isSelected = action.payload;
    },
    setOptimisticCache: (
      state: messageSliceType,
      action: {
        payload: {
          chatId: string;
          message: MessageTypes;
          prevCache: MessageTypes[];
        };
      }
    ) => {
      const { chatId, message, prevCache } = action.payload;
      if (prevCache) {
        state.optimisticCache[chatId] = [...prevCache, message];
      } else {
        state.optimisticCache[chatId] = [message];
      }
    },
    deleteOptimisticCache: (
      state: messageSliceType,
      action: {
        payload: {
          chatId: string;
          messageId: number;
          prevCache: MessageTypes[];
        };
      }
    ) => {
      const { chatId, messageId, prevCache } = action.payload;
      if (prevCache) {
        state.optimisticCache[chatId] = state.optimisticCache[chatId].filter(
          (msg) => msg.messageId !== messageId
        );
      } else {
        state.optimisticCache[chatId] = [];
      }
    },
  },
});

export const { setIsSelected, setOptimisticCache, deleteOptimisticCache } =
  messageSlice.actions;

export default messageSlice.reducer;
