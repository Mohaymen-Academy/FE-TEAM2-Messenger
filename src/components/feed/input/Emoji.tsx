import React, { HTMLAttributes, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useSelector } from "react-redux";
import { merge } from "@/utils/merge";
import { StoreStateTypes } from "@/utils/types";

interface EmojiProps extends HTMLAttributes<HTMLDivElement> {}

const Emoji: React.FC<EmojiProps> = ({ className, ...props }) => {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);
  return (
    <div className={merge(className)} {...props}>
      <Picker
        data={data}
        onEmojiSelect={console.log}
        theme={theme}
        categories={["people", "activity", "flags"]}
        // onClickOutsie={}
        emojiButtonColors={[]}
        emojiButtonRadius="6px"
        locale="fa"
        perLine={9}
        previewPosition="none"
      />
    </div>
  );
};

export default Emoji;
