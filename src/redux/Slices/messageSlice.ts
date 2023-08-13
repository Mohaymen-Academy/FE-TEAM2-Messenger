import { EmojiMartData } from "@emoji-mart/data";
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import {
  ContentState,
  EditorState,
  Modifier,
  RawDraftContentState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import { RootState } from "../reducers";

export type messageSliceType = {
  rawMessage: RawDraftContentState;
  isSelected: boolean;
};

const initialState: messageSliceType = {
  rawMessage: convertToRaw(EditorState.createEmpty().getCurrentContent()),
  isSelected: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (
      state: messageSliceType,
      action: PayloadAction<EditorState>
    ) => {
      state.rawMessage = convertToRaw(action.payload.getCurrentContent());
    },
    addEmoji: (
      state: messageSliceType,
      action: PayloadAction<EmojiMartData>
    ) => {
      const emoji = action.payload;

      let editorState = EditorState.createWithContent(
        convertFromRaw(state.rawMessage)
      );

      const currentContent = editorState.getCurrentContent();
      console.log(`${currentContent.getPlainText()}${emoji.native} `);

      const contentStateWithEmoji = ContentState.createFromText(
        `${currentContent.getPlainText()}${emoji.native}`
      );

      const newEditorState = EditorState.push(
        editorState,
        contentStateWithEmoji,
        "insert-characters"
      );

      setMessage(newEditorState);
    },
    setIsSelected: (
      state: messageSliceType,
      action: PayloadAction<boolean>
    ) => {
      state.isSelected = action.payload;
    },
  },
});

export const selectEditorState = (state: RootState) => {
  const editorState = convertFromRaw(state.message.rawMessage);
  return EditorState.createWithContent(editorState);
};

export const { setMessage, addEmoji, setIsSelected } = messageSlice.actions;

export default messageSlice.reducer;
