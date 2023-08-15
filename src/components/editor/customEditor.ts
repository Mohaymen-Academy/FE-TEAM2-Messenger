import { Editor, Range } from "slate";

export const customEditor = {
  isBoldMarkActive: (editor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.bold === true : false;
  },
  isItalicMarkActive: (editor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.italic === true : false;
  },
  isUnderlineMarkActive: (editor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.underline === true : false;
  },
  isSpoilerMarkActive: (editor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.spoiler === true : false;
  },
  isStrikeThroughMarkActive: (editor) => {
    const mark = Editor.marks(editor);
    return mark ? mark.strike === true : false;
  },
  toggleBoldMark: (editor) => {
    const isActive = customEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },
  toggleItalicMark: (editor) => {
    const isActive = customEditor.isItalicMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "italic");
    } else {
      Editor.addMark(editor, "italic", true);
    }
  },
  toggleUnderlineMark: (editor) => {
    const isActive = customEditor.isUnderlineMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "underline");
    } else {
      Editor.addMark(editor, "underline", true);
    }
  },
  toggleSpoilerMark: (editor) => {
    const isActive = customEditor.isSpoilerMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "spoiler");
    } else {
      Editor.addMark(editor, "spoiler", true);
    }
  },
  toggleStrikeThroughMark: (editor) => {
    const isActive = customEditor.isStrikeThroughMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "strike");
    } else {
      Editor.addMark(editor, "strike", true);
    }
  },
};
