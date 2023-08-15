import { useRef, useState } from "react";
import {
  DraftHandleValue,
  Editor,
  EditorState,
  SelectionState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, setSelection } from "@/redux/Slices/messageSlice";
import { StoreStateTypes } from "@/utils/types";
import { merge } from "@/utils/merge";

const MessageInput = () => {
  const dispatch = useDispatch();
  const editorRef = useRef<Editor | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { rawMessage, selection } = useSelector(
    (store: StoreStateTypes) => store.message
  );
  const emptySelection = SelectionState.createEmpty("");
  const editorState = EditorState.createWithContent(convertFromRaw(rawMessage));
  // const [selection, setSelection] = useState<SelectionState>(
  //   EditorState.createEmpty().getSelection()
  // );

  const handleEditorChange = (newEditorState: EditorState) => {
    const rawMessage = convertToRaw(newEditorState.getCurrentContent());
    dispatch(setMessage(rawMessage));
    dispatch(setSelection(JSON.stringify(newEditorState.getSelection())));
  };

  const handleClick = () => {
    editorRef.current?.focus();
  };

  return (
    <div
      className={merge(
        "mx-2 px-3 py-2.5 w-full text-base text-gray-900 bg-white ring-1 ring-white dark:ring-gray-800 dark:focus:ring-blue-400 rounded-lg border border-gray-300 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white outline-none resize-none leading-6",
        editorState.getCurrentContent().getBlockMap().size >= 10
          ? "max-h-[240px] overflow-y-auto"
          : ""
      )}
      ref={containerRef}
    >
      <Editor
        editorState={EditorState.acceptSelection(
          editorState,
          emptySelection.merge(JSON.parse(selection))
        )}
        onChange={handleEditorChange}
        placeholder="پیام ..."
        textAlignment="right"
        ref={editorRef}
      />
    </div>
  );
};

export default MessageInput;
