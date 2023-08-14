import React, { HTMLAttributes } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useDispatch, useSelector } from "react-redux";
import { merge } from "@/utils/merge";
import { StoreStateTypes } from "@/utils/types";

interface EmojiProps extends HTMLAttributes<HTMLDivElement> {}

const Emoji: React.FC<EmojiProps> = ({ className, ...props }) => {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);
  const dispatch = useDispatch();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={merge(className)}
      {...props}
    >
      <Picker
        data={data}
        // onEmojiSelect={}
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
