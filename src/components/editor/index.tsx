import React, { useState } from "react";
import { ReactEditor, Slate, withReact } from "slate-react";
import { BaseEditor, Descendant, createEditor } from "slate";
import EditableTextArea from "./EditableTextArea";
import Tools from "./Tools";

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

  return (
    <div className="">
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={(value) => {
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
