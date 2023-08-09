import ConversationWrapper from "@/components/conversation/ConversationWrapper";
import FeedWrapper from "@/components/feed/FeedWrapper";
import React from "react";
import {
  isAndroid,
  isIOS,
  isMobile,
  isSamsungBrowser,
} from "react-device-detect";
const Chat = () => {
  const userIsInMobile = (isAndroid || isIOS) && isMobile;
  return (
    <div
      style={{
        height: isSamsungBrowser
          ? "calc(100vh - 92px)"
          : userIsInMobile
          ? "calc(100vh - 52px)"
          : "100vh",
      }}
      className="my-element flex transition-all m-auto rounded-none flex-col overflow-hidden relative before:absolute before:bg-lightGradient dark:before:bg-darkBg before:h-full before:w-full before:bg-cover after:bg-pattern2 after:h-full after:w-full after:bg-repeat after:absolute before:z-10 after:z-20 max-w-[1920px]"
    >
      <div className="absolute flex w-full h-full left-0 top-0 z-30">
        <ConversationWrapper />
        <FeedWrapper userId="232" />
      </div>
    </div>
  );
};

export default Chat;
