import { EmojiMartData } from "@emoji-mart/data";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ContentState,
  EditorState,
  Entity,
  Modifier,
  RawDraftContentState,
  SelectionState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";

export type messageSliceType = {
  rawMessage: RawDraftContentState;
  selection: string;
};

const EmojiEntity = (emoji: EmojiMartData) => {
  return Entity.create("emoji", "IMMUTABLE", {
    native: emoji.native,
    unicode: emoji.unified,
  });
};

const initialState: messageSliceType = {
  rawMessage: convertToRaw(EditorState.createEmpty().getCurrentContent()),
  selection: JSON.stringify(EditorState.createEmpty().getSelection()),
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (
      state: messageSliceType,
      action: PayloadAction<RawDraftContentState>
    ) => {
      state.rawMessage = action.payload;
    },
    setSelection: (state: messageSliceType, action: PayloadAction<string>) => {
      state.selection = action.payload;
    },
    // addEmoji: (
    //   state: messageSliceType,
    //   action: PayloadAction<EmojiMartData>
    // ) => {

    //   const contentState = EditorState.createWithContent(
    //     convertFromRaw(state.rawMessage)
    //   );
    //   const selectionState = SelectionState.createEmpty("").merge(
    //     JSON.parse(state.selection)
    //   );

    //   const contentStateWithEmoji = Modifier.replaceText(
    //     contentState,
    //     selectionState,
    //     emojiCode,
    //     null,
    //     EmojiEntity(emojiCode)
    //   );

    //   const editorState = EditorState.acceptSelection(
    //     contentState,
    //     selectionState
    //   );

    //   const currentContent = editorState.getCurrentContent();

    //   const contentStateWithEmoji = ContentState.createFromText(
    //     `${currentContent.getPlainText()}${emoji.native}`
    //   );

    //   const newEditorState = EditorState.push(
    //     editorState,
    //     contentStateWithEmoji,
    //     "insert-characters"
    //   );

    //   return {
    //     ...state,
    //     rawMessage: convertToRaw(newEditorState.getCurrentContent()),
    //   };
    // },
  },
});

export const { setMessage, setSelection } = messageSlice.actions;

export default messageSlice.reducer;
