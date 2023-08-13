import React, { HTMLAttributes, useState } from "react";
import data, { EmojiMartData } from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useDispatch, useSelector } from "react-redux";
import { merge } from "@/utils/merge";
import { StoreStateTypes } from "@/utils/types";
import { addEmoji } from "@/redux/Slices/messageSlice";

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
        onEmojiSelect={(emoji: EmojiMartData) => dispatch(addEmoji(emoji))}
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
