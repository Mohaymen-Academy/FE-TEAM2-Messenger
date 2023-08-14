import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EditorState, RawDraftContentState, convertToRaw } from "draft-js";

export type messageSliceType = {
  rawMessage: RawDraftContentState;
  selection: string;
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
      console.log(action.payload);
    },
  },
});

export const { setMessage, setSelection } = messageSlice.actions;

export default messageSlice.reducer;

// addEmoji: (
//   state: messageSliceType,
//   action: PayloadAction<EmojiMartData>
// ) => {
//   const emoji = action.payload;

//   let editorState = EditorState.createWithContent(
//     convertFromRaw(state.rawMessage)
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
