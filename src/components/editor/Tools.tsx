import { Button } from "@/components/ui";
import {
  FaBold,
  FaCopy,
  FaCut,
  FaEyeSlash,
  FaItalic,
  FaPaste,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";
import { customEditor } from "./customEditor";
import { Editor, Range, Transforms } from "slate";
import { useCopyToClipboard } from "react-use";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { AnimatePresence, motion } from "framer-motion";

const Tools = ({ editor }: { editor?: any }) => {
  const [clipboard, copyToClipboard] = useCopyToClipboard();
  const { isSelected } = useSelector((store: StoreStateTypes) => store.message);

  return (
    <AnimatePresence>
      {isSelected && (
        <motion.div
          key="section"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            duration: 0.15,
          }}
        >
          <div className="absolute -top-10 flex left-10">
            <div>
              <Button
                className="w-9 h-9 rounded-none rounded-r-lg !bg-primary hover:!bg-secondary"
                onMouseDown={(e) => {
                  e.preventDefault();
                  customEditor.toggleBoldMark(editor);
                }}
              >
                <span className="sr-only">برجسته کردن متن</span>
                <FaBold size={18} className="text-primary" />
              </Button>
              <Button
                className="w-9 h-9 rounded-none !bg-primary hover:!bg-secondary"
                onMouseDown={(e) => {
                  e.preventDefault();
                  customEditor.toggleItalicMark(editor);
                }}
              >
                <span className="sr-only">ایتالیک کردن متن</span>
                <FaItalic size={18} className="text-primary" />
              </Button>
              <Button
                className="w-9 h-9 rounded-none !bg-primary hover:!bg-secondary"
                onMouseDown={(e) => {
                  e.preventDefault();
                  customEditor.toggleUnderlineMark(editor);
                }}
              >
                <span className="sr-only">کشیدن زیرخط برای متن</span>
                <FaUnderline size={18} className="text-primary" />
              </Button>
              <Button
                className="w-9 h-9 rounded-none !bg-primary hover:!bg-secondary"
                onMouseDown={(e) => {
                  e.preventDefault();
                  customEditor.toggleStrikeThroughMark(editor);
                }}
              >
                <span className="sr-only">خط کشیدن روی متن </span>
                <FaStrikethrough size={18} className="text-primary" />
              </Button>
            </div>

            <div className="border-r dark:border-gray-200 border-slate-800">
              <Button
                className="w-9 h-9 rounded-none !bg-primary hover:!bg-secondary"
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
                <span className="sr-only">کپی کردن متن</span>
                <FaCopy size={18} className="text-primary" />
              </Button>

              <Button
                className="w-9 h-9  rounded-none !bg-primary hover:!bg-secondary"
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (clipboard) {
                    Transforms.insertText(editor, clipboard.value as string);
                  }
                }}
              >
                <span className="sr-only">جای گذاری متن</span>
                <FaPaste size={18} className="text-primary" />
              </Button>

              <Button
                className="w-9 h-9  rounded-none !bg-primary hover:!bg-secondary"
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

                    Editor.deleteFragment(editor, selection);
                  }
                }}
              >
                <span className="sr-only">برش متن</span>
                <FaCut size={18} className="text-primary" />
              </Button>
            </div>

            <Button
              className="w-9 h-9 border-r dark:border-gray-200 border-slate-800 rounded-none rounded-l-lg !bg-primary hover:!bg-secondary"
              onMouseDown={(e) => {
                e.preventDefault();
                customEditor.toggleSpoilerMark(editor);
              }}
            >
              <span className="sr-only">پنهان کردن متن</span>
              <FaEyeSlash size={18} className="text-primary" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
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
