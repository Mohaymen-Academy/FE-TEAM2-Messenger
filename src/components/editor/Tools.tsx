import { Button } from "@/components/ui";
import { createHyperscript } from "slate-hyperscript";
import { parseSlateToHtml } from "./serializer";
import {
  FaBold,
  FaCopy,
  FaEyeSlash,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";
import { customEditor } from "./customEditor";
import { Editor, Range } from "slate";
import { useCopyToClipboard } from "react-use";
import useToastify from "@/hooks/useTostify";

const Tools = ({ editor }: { editor?: any }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const tostify = useToastify();

  return (
    <div className="absolute -top-10 flex left-10">
      <Button
        className="w-9 h-9 rounded-none rounded-r-lg !bg-primary hover:!bg-secondary"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleBoldMark(editor);
        }}
      >
        <FaBold size={18} className="text-primary" />
      </Button>
      <Button
        className="w-9 h-9 border-r dark:border-gray-200 border-slate-800 rounded-none !bg-primary hover:!bg-secondary"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleItalicMark(editor);
        }}
      >
        <FaItalic size={18} className="text-primary" />
      </Button>
      <Button
        className="w-9 h-9 border-r dark:border-gray-200 border-slate-800 rounded-none !bg-primary hover:!bg-secondary"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleUnderlineMark(editor);
        }}
      >
        <FaUnderline size={18} className="text-primary" />
      </Button>
      <Button
        className="w-9 h-9 border-r dark:border-gray-200 border-slate-800 rounded-none !bg-primary hover:!bg-secondary"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleStrikeThroughMark(editor);
        }}
      >
        <FaStrikethrough size={18} className="text-primary" />
      </Button>

      <Button
        className="w-9 h-9 border-r dark:border-gray-200 border-slate-800 rounded-none !bg-primary hover:!bg-secondary"
        onMouseDown={(e) => {
          e.preventDefault();
          const { selection } = editor;

          if (selection) {
            const [start, end] = Range.edges(selection);
            const selectedText = Editor.string(editor, {
              anchor: start,
              focus: end,
            });
            copyToClipboard(selectedText);
          }
        }}
      >
        <FaCopy size={18} className="text-primary" />
      </Button>

      <Button
        className="w-9 h-9 border-r dark:border-gray-200 border-slate-800 rounded-none rounded-l-lg !bg-primary hover:!bg-secondary"
        onMouseDown={(e) => {
          e.preventDefault();
          customEditor.toggleSpoilerMark(editor);
        }}
      >
        <FaEyeSlash size={18} className="text-primary" />
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
