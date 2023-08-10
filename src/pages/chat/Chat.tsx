import ConversationWrapper from "@/components/conversation/ConversationWrapper";
import FeedWrapper from "@/components/feed/FeedWrapper";

import {
  isAndroid,
  isIOS,
  isMobile,
  isSamsungBrowser,
} from "react-device-detect";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { useMemo, useState } from "react";
import Button from "@/components/ui/button/Button";
import { useSearchParams } from "react-router-dom";
import useViewportWidth from "@/hooks/useViewportWidth";
const Chat = () => {
  const viewPortWidth = useViewportWidth();
  const userIsInMobile = (isAndroid || isIOS) && isMobile;
  const [showComplete, setShowComplete] = useState(false);
  const [showComplete2, setShowComplete2] = useState(false);

  const [URLSearchParams] = useSearchParams();
  const [showSideBar, setShowSideBar] = useState(true);

  const selectedConversation = URLSearchParams.get("conversationId");

  const conversationShowCriteria = useMemo(() => {
    if (viewPortWidth < 765) {
      if (selectedConversation) {
        return "-20%";
      }
      if (!selectedConversation) {
        return "0";
      }
    }

    if (viewPortWidth > 765) {
      if (showComplete) {
        return "0px";
      }
      if (!showComplete) {
        return "-20%";
      }
    }
  }, [viewPortWidth, selectedConversation, showComplete]);

  const feedShowCriteria = useMemo(() => {
    if (viewPortWidth < 765) {
      if (selectedConversation) {
        return "0";
      }
      if (!selectedConversation) {
        return "100%";
      }
    }

    if (viewPortWidth > 765) {
      if (showComplete) {
        return "500px";
      }
      if (!showComplete) {
        return "0px";
      }
    }
  }, [viewPortWidth, selectedConversation, showComplete]);
  return (
    <div className="flex transition-all m-auto rounded-none flex-col relative max-w-[1920px] bg-repeat h-full">
      <div className="absolute top-0 left-0 z-50">
        <Button onClick={() => setShowComplete(!showComplete)}>
          showCopmlete
        </Button>
      </div>
      <div className="flex w-full h-full relative">
        <ConversationWrapper
          conversationShowCriteria={conversationShowCriteria}
        />
        <FeedWrapper feedShowCriteria={feedShowCriteria} userId="232" />

        {/* ////////////////////// */}
        {/* <div
          style={{
            width: showComplete2 && 0,
            minWidth: showComplete2 && 0,
          }}
          className="h-full lg:w-[400px] sm:min-w-[300px] bg-orange-400/60 transition-all duration-300 absolute left-0 xl:static "
        >
          <div className="absolute">
            <Button
              className=""
              onClick={() => setShowComplete2(!showComplete2)}
            >
              showCopmlete
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Chat;
