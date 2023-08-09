import ConversationWrapper from "@/components/conversation/ConversationWrapper";
import FeedWrapper from "@/components/feed/FeedWrapper";
import pattern from "../../assets/img/bgPattern2.webp";

import {
  isAndroid,
  isIOS,
  isMobile,
  isSamsungBrowser,
} from "react-device-detect";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { useState } from "react";
import Button from "@/components/ui/button/Button";
const Chat = () => {
  const userIsInMobile = (isAndroid || isIOS) && isMobile;
  const theme = useSelector((store: StoreStateTypes) => store.app.theme);
  const [showComplete, setShowComplete] = useState(false);
  return (
    <div
      style={{
        height: false
          ? "calc(100vh - 92px)"
          : false
          ? "calc(100vh - 52px)"
          : "100vh",
        background: `linear-gradient(120deg, ${
          theme === "dark"
            ? "rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)"
            : "rgba(119, 172, 140, 0.8), rgba(215, 219, 185, 0.8)"
        }), url(${pattern})`,
      }}
      className="flex transition-all m-auto rounded-none flex-col relative max-w-[1920px] bg-repeat"
    >
      <div className="flex w-full h-full">
        <div
          style={{
            width: showComplete && 0,
            minWidth: showComplete && 0,
          }}
          className="h-full lg:w-[500px] sm:min-w-[400px] bg-red-400 transition-all duration-1000 relative"
        >
          <div className="absolute">
            <Button onClick={() => setShowComplete(!showComplete)}>
              showCopmlete
            </Button>
          </div>
        </div>
        <div className="h-full lg:w-full w-screen sm:min-w-[100vh] bg-green-400 relative">
          FEEEEEEEEEEEEEEEEED
          <div className="absolute left-0">FEEEEEEED</div>
          <Button onClick={() => setShowComplete(!showComplete)}>
            showCopmlete
          </Button>
        </div>
        {/*         
        <ConversationWrapper />
        <FeedWrapper userId="232" /> */}
      </div>
    </div>
  );
};

export default Chat;
