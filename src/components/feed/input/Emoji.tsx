import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Emoji: React.FC = () => {
  return (
    <div>
      <EmojiPicker lazyLoadEmojis={true} />
    </div>
  );
};

export default Emoji;
