import { useSearchParams } from "react-router-dom";
import DesktopSidebar from "../desktopSideBar/DesktopSidebar";
import ConversationList from "./ConversationList";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import ConversationSectionWrapper from "./components/conversationSections/ConversationSectionWrapper";
import CreatePvSection from "./components/conversationSections/CreatePvSection";
import { useState } from "react";
import SwipeWrapper from "@/ui/SwipeWrapper/SwipeWrapper";

interface ConversationWrapperProps {}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({}) => {
  const [URLSearchParams] = useSearchParams();
  const [showSideBar, setShowSideBar] = useState(true);

  const selectedConversation = URLSearchParams.get("conversationId");
  const section = useSelector(
    (state: StoreStateTypes) => state.conversation.section
  );
  return (
    <div
      className={clsx(
        "w-full md:w-4/5 xl:w-2/5 bg-gray-50 dark:bg-slate-700 backdrop-blur-[5px] flex flex-col relative shadow-2xl shadow-lime-950 dark:shadow-neutral-800/50 rounded-l-none md:rounded-l-3xl transition md:opacity-100 md:scale-100",
        { "opacity-0 scale-75": selectedConversation }
      )}
    >
      <ConversationSectionWrapper show={section === "pvCreate"}>
        <CreatePvSection
          users={[
            { name: "ابوالفضل" },
            { name: "غلی" },
            { name: "بهروز" },
            { name: "فاطمه " },
          ]}
        />
      </ConversationSectionWrapper>
      <ConversationSectionWrapper show={section === "conversations"}>
        <SwipeWrapper
          id="swipe-conversation-list-section"
          onSwipeLeft={() => setShowSideBar(true)}
          onSwipeRight={() => setShowSideBar(false)}
        >
          <DesktopSidebar
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
          />
          <div className="flex flex-col h-full w-full">
            <div
              style={{ paddingRight: showSideBar ? "85px" : "0.75rem" }}
              className="h-full overflow-y-auto overflow-x-hidden px-3 transition-all duration-500"
            >
              <ConversationList />
            </div>
          </div>
        </SwipeWrapper>
      </ConversationSectionWrapper>
    </div>
  );
};

export default ConversationWrapper;
