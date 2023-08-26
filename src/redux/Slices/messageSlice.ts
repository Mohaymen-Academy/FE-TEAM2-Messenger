import { MessageTypes } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type messageSliceType = {
  message: string;
  isSelected: boolean;
  optimisticCache: Record<string, MessageTypes[]>;
  optimisticCacheDeletedMessages: number[];
};

const initialState: messageSliceType = {
  message: "",
  isSelected: false,
  optimisticCache: {},
  optimisticCacheDeletedMessages: [],
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
    setDeletedMessages: (
      state: messageSliceType,
      action: {
        payload: {
          messageId: number;
        };
      }
    ) => {
      state.optimisticCacheDeletedMessages.push(action.payload.messageId);
    },
    removeDeletedMessage: (
      state: messageSliceType,
      action: {
        payload: {
          messageId: number;
        };
      }
    ) => {
      state.optimisticCacheDeletedMessages =
        state.optimisticCacheDeletedMessages.filter(
          (id) => id !== action.payload.messageId
        );
    },
  },
});

export const {
  setIsSelected,
  setOptimisticCache,
  deleteOptimisticCache,
  setDeletedMessages,
  removeDeletedMessage,
} = messageSlice.actions;

export default messageSlice.reducer;
