import ConversationWrapper from "@/components/conversation/ConversationWrapper";
import FeedWrapper from "@/components/feed/FeedWrapper";

// import {
//   isAndroid,
//   isIOS,
//   isMobile,
//   // isSamsungBrowser,
//   // MobileOnlyView,
//   // isMobileOnly,
// } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useViewportWidth from "@/hooks/useViewportWidth";
import { onToggleEmoji, onToggleUpload } from "@/redux/Slices/appSlice";
import ProfileWrapper from "@/components/profile/ProfileWrapper";

const Chat = () => {
  const dispatch = useDispatch();
  const viewPortWidth = useViewportWidth();
  // const userIsInMobile = (isAndroid || isIOS) && isMobile;
  const showConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.showConversations
  );
  const [URLSearchParams] = useSearchParams();
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
      if (showConversation) {
        return "0px";
      }
      if (!showConversation) {
        return "-5%";
      }
    }
  }, [viewPortWidth, selectedConversation, showConversation]);

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
      if (showConversation) {
        return "480px";
      }
      if (!showConversation) {
        return "0px";
      }
    }
  }, [viewPortWidth, selectedConversation, showConversation]);

  const onChatClickHandler = () => {
    dispatch(onToggleEmoji({ show: false }));
    dispatch(onToggleUpload({ show: false }));
  };
  return (
    <div
      // onClick={onChatClickHandler}
      className="flex transition-all m-auto rounded-none flex-col relative max-w-[1920px] bg-repeat h-full"
    >
      <div className="flex w-full h-full relative">
        <ConversationWrapper
          conversationShowCriteria={conversationShowCriteria}
        />
        <FeedWrapper feedShowCriteria={feedShowCriteria} userId="232" />

        <ProfileWrapper />
      </div>
    </div>
  );
};

export default Chat;
