import { Button } from "@/components/ui";
import { Editor } from "slate";
import { createHyperscript } from "slate-hyperscript";
import { deserialize, parseSlateToHtml } from "./serializer";

const customEditor = {
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
};

const Tools = ({ editor }: { editor?: any }) => {
  return (
    <div className="flex gap-4 absolute bottom-24">
      <Button
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleBoldMark(editor);
        }}
      >
        Bold
      </Button>
      <Button
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleItalicMark(editor);
        }}
      >
        Italic
      </Button>
      <Button
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleUnderlineMark(editor);
        }}
      >
        UnderLine
      </Button>
      <Button
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleSpoilerMark(editor);
        }}
      >
        spoiler
      </Button>
      <Button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.insertText("🤣");
        }}
      >
        emoji
      </Button>
      <Button
        onMouseDown={(e) => {
          e.preventDefault();
          console.log(editor.children);

          const h = parseSlateToHtml(editor.children);
          console.log(h);
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Tools;
