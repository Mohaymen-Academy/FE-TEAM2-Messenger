import { Button } from "@/components/ui";
import { Editor } from "slate";
import { createHyperscript } from "slate-hyperscript";
import { deserialize, parseSlateToHtml } from "./serializer";
import {
  FaBold,
  FaEyeSlash,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";

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

const Tools = ({ editor }: { editor?: any }) => {
  return (
    <div className="absolute -top-10 flex left-10">
      <Button
        className="w-9 h-9 rounded-none rounded-r-lg"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleBoldMark(editor);
        }}
      >
        <FaBold size={18} />
      </Button>
      <Button
        className="w-9 h-9 border-r border-gray-200 dark:border-slate-800 rounded-none"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleItalicMark(editor);
        }}
      >
        <FaItalic size={18} />
      </Button>
      <Button
        className="w-9 h-9 border-r border-gray-200 dark:border-slate-800 rounded-none"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleUnderlineMark(editor);
        }}
      >
        <FaUnderline size={18} />
      </Button>
      <Button
        className="w-9 h-9 border-r border-gray-200 rounded-none"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleStrikeThroughMark(editor);
        }}
      >
        <FaStrikethrough size={18} />
      </Button>
      <Button
        className="w-9 h-9 border-r border-gray-200 dark:border-slate-800 rounded-none rounded-l-lg"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleSpoilerMark(editor);
        }}
      >
        <FaEyeSlash size={18} />
      </Button>
    </div>
  );
};

export default Tools;

{
  /* <Button
        onMouseDown={(e) => {
          e.preventDefault();
          editor.insertText("🤣");
        }}
      >
        emoji
      </Button> */
}
