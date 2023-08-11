import { useNavigate } from "react-router-dom";
import MessageInput from "./messages/MessageInput";
import Messages from "./messages/Messages";
import SwipeWrapper from "@/components/ui/SwipeWrapper";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import patternLight from "../../assets/img/bgPatternLight.png";
import patternDark from "../../assets/img/bgPatternDark.png";
import Header from "./Header";

interface FeedWrapperProps {
  userId: string;
  feedShowCriteria?: string;
}

const FeedWrapper: React.FC<FeedWrapperProps> = ({
  userId,
  feedShowCriteria,
}) => {
  const navigate = useNavigate();
  const theme = useSelector((store: StoreStateTypes) => store.app.theme);

  return (
    <div
      style={{
        height: false
          ? "calc(100vh - 92px)"
          : false
          ? "calc(100vh - 52px)"
          : "100%",
        background: `url(${
          theme === "dark" ? patternDark : patternLight
        }), linear-gradient(-40deg, ${
          theme === "dark"
            ? "rgba(15, 23, 42, 1), rgba(15, 23, 42, 1)"
            : "rgba(119, 172, 140, 1), rgba(215, 219, 185, 1)"
        })`,
        backgroundBlendMode: "overlay",
        right: feedShowCriteria,
      }}
      className="h-full w-screen absolute lg:static right-0 transition-[right] z-30"
    >
      <div className="bg h-full m-auto">
        <div className="h-full w-full flex flex-col bg-black/20 md:bg-transparent dark:bg-transparent">
          <SwipeWrapper
            id="swipe-conversation-wrapper"
            onSwipeRight={() => {}}
            onSwipeLeft={() => navigate("/chat")}
          >
            <div className="flex flex-col h-full items-center">
              <Header />
              <div className="h-[calc(100vh-61px)] w-full">
                <div className="flex flex-col h-full gap-1 w-full">
                  <Messages conversationId="12" userId={userId} />
                  <MessageInput />
                </div>
              </div>
            </div>
          </SwipeWrapper>
        </div>
      </div>
    </div>
  );
};

export default FeedWrapper;
