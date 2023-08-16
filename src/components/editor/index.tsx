import React, { useCallback, useState } from "react";
import { ReactEditor, Slate, withReact } from "slate-react";
import {
  BaseEditor,
  Descendant,
  createEditor,
  Editor as SlateEditor,
  Range,
} from "slate";
import EditableTextArea from "./EditableTextArea";
import Tools from "./Tools";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { setIsSelected } from "@/redux/Slices/messageSlice";

interface EditorProps {
  children: React.ReactNode;
  initialValue: Descendant[];
}

type CustomElement = { type: "paragrapgh"; children: CustomText[] };
type CustomText = { text: string };

declare module slate {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const Editor = ({ children, initialValue }: EditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [isTextSelected, setIsTextSelected] = useState(false);
  const dispatch = useDispatch();
  const { isSelected } = useSelector((store: StoreStateTypes) => store.message);

  const handleSelectionChange = useCallback(() => {
    const { selection } = editor;
    if (selection) {
      const [start, end] = Range.edges(selection);
      dispatch(setIsSelected(!Range.isCollapsed(selection) && start !== end));
    } else {
      dispatch(setIsSelected(false));
    }
  }, [editor.selection]);

  return (
    <div className="w-full">
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={(value) => {
          handleSelectionChange();

          const isAtChange = editor.operations.some(
            (op) => op.type !== "set_selection"
          );

          if (isAtChange) {
            const content = JSON.stringify(value);
            localStorage.setItem("content", content);
          }
        }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { editor })
        )}
      </Slate>
    </div>
  );
};

Editor.Input = EditableTextArea;
Editor.ToolBar = Tools;

export default Editor;
