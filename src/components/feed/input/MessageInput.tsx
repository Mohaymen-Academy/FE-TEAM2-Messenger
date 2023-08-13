import React, { useState } from "react";
import { merge } from "@/utils/merge";
import {
  Editor,
  EditorState,
  RichUtils,
  SelectionState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsSelected, setMessage } from "@/redux/Slices/messageSlice";
import { StoreStateTypes } from "@/utils/types";

const MessageInput = () => {
  const dispatch = useDispatch();
  const { rawMessage } = useSelector((store: StoreStateTypes) => store.message);
  const editorState = EditorState.createWithContent(convertFromRaw(rawMessage));
  const [selection, setSelection] = useState<SelectionState>(
    EditorState.createEmpty().getSelection()
  );

  const handleEditorChange = (newEditorState: EditorState) => {
    dispatch(setMessage(newEditorState));
    dispatch(setIsSelected(!newEditorState.getSelection().isCollapsed()));
    setSelection(newEditorState.getSelection());
  };

  return (
    <div
      className={
        "mx-2 px-3 py-2.5 w-full text-base text-gray-900 bg-white ring-1 ring-white dark:ring-gray-800 dark:focus:ring-blue-400 rounded-lg border border-gray-300 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white outline-none resize-none leading-6 m-6"
      }
    >
      <Editor
        editorState={EditorState.acceptSelection(
          editorState,
          selection as SelectionState
        )}
        onChange={handleEditorChange}
        placeholder="پیام ..."
        textAlignment="right"
      />
    </div>
  );
};

export default MessageInput;
