import { useNavigate, useSearchParams } from "react-router-dom";
import MessageInput from "./messages/MessageInput";
import Messages from "./messages/Messages";
import SwipeWrapper from "@/ui/SwipeWrapper/SwipeWrapper";

interface FeedWrapperProps {
  userId: string;
}

const FeedWrapper: React.FC<FeedWrapperProps> = ({ userId }) => {
  const navigate = useNavigate();
  const [URLSearchParams] = useSearchParams();
  const selectedConversation = URLSearchParams.get("conversationId");
  return (
    <div
      style={{ left: selectedConversation ? "0" : "-100%" }}
      className="absolute md:static h-full w-full flex flex-col transition-[left] bg-black/20 md:bg-transparent dark:bg-transparent"
    >
      <SwipeWrapper
        id="swipe-conversation-wrapper"
        onSwipeRight={() => {}}
        onSwipeLeft={() => navigate("/chat")}
      >
        <div className="flex flex-col h-full">
          <Messages conversationId="12" userId={userId} />
          <MessageInput />
        </div>
      </SwipeWrapper>
    </div>
  );
};

export default FeedWrapper;
