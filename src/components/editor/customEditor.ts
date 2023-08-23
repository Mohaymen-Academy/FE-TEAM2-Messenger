//@ts-nocheck
import { BaseEditor, Editor } from "slate";
import { ReactEditor } from "slate-react";

export const customEditor = {
  isBoldMarkActive: (editor: BaseEditor & ReactEditor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.bold === true : false;
  },
  isItalicMarkActive: (editor: BaseEditor & ReactEditor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.italic === true : false;
  },
  isUnderlineMarkActive: (editor: BaseEditor & ReactEditor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.underline === true : false;
  },
  isSpoilerMarkActive: (editor: BaseEditor & ReactEditor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.spoiler === true : false;
  },
  isStrikeThroughMarkActive: (editor: BaseEditor & ReactEditor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.strike === true : false;
  },
  toggleBoldMark: (editor: BaseEditor & ReactEditor) => {
    const isActive = customEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },
  toggleItalicMark: (editor: BaseEditor & ReactEditor) => {
    const isActive = customEditor.isItalicMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "italic");
    } else {
      Editor.addMark(editor, "italic", true);
    }
  },
  toggleUnderlineMark: (editor: BaseEditor & ReactEditor) => {
    const isActive = customEditor.isUnderlineMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "underline");
    } else {
      Editor.addMark(editor, "underline", true);
    }
  },
  toggleSpoilerMark: (editor: BaseEditor & ReactEditor) => {
    const isActive = customEditor.isSpoilerMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "spoiler");
    } else {
      Editor.addMark(editor, "spoiler", true);
    }
  },
  toggleStrikeThroughMark: (editor: BaseEditor & ReactEditor) => {
    const isActive = customEditor.isStrikeThroughMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "strike");
    } else {
      Editor.addMark(editor, "strike", true);
    }
  },
};
