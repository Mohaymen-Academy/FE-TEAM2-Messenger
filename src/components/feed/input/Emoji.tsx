import React, { HTMLAttributes } from "react";
import data, { EmojiMartData } from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useDispatch, useSelector } from "react-redux";
import { merge } from "@/utils/merge";
import { StoreStateTypes } from "@/utils/types";
import { BaseEditor, Node, Transforms } from "slate";
import { ReactEditor } from "slate-react";

interface EmojiProps extends HTMLAttributes<HTMLDivElement> {
  editor: BaseEditor & ReactEditor;
}

const Emoji: React.FC<EmojiProps> = ({ editor, className, ...props }) => {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={merge(className)}
      {...props}
    >
      <Picker
        data={data}
        onEmojiSelect={(emoji: EmojiMartData) =>
          Transforms.insertText(editor, emoji.native)
        }
        theme={theme}
        categories={["people", "activity", "flags"]}
        emojiButtonColors={[]}
        emojiButtonRadius="6px"
        locale="fa"
        perLine={10}
        previewPosition="none"
        dynamicWidth
      />
    </div>
  );
};

export default Emoji;
