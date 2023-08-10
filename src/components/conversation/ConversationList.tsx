import SwipeWrapper from "@/ui/SwipeWrapper/SwipeWrapper";
import ConversationItem from "./ConversationItem";
import DesktopSidebar from "../desktopSideBar/DesktopSidebar";
import { useState } from "react";

interface ConversationListProps {}

const ConversationList: React.FC<ConversationListProps> = ({}) => {
  const [showSideBar, setShowSideBar] = useState(true);
  // const innerWidth = useViewportWidth();

  // console.log("renrende");
  return (
    <SwipeWrapper
      id="swipe-conversation-list-section"
      onSwipeLeft={() => setShowSideBar(true)}
      onSwipeRight={() => setShowSideBar(false)}
    >
      <div className="flex h-full">
        <DesktopSidebar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <div className="flex flex-col h-full w-full">
          <div
            // style={{ paddingRight: showSideBar ? "90px" : "0.75rem" }}
            className="h-full w-full overflow-y-auto overflow-x-hidden  duration-500 custom-scrollbar scrollbar-none md:scrollbar"
          >
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
            <ConversationItem
              onDeleteConversation={() => {}}
              onClickConversation={() => {}}
              conversation={{ a: 1 }}
              isSelected={false}
            />
          </div>
        </div>
      </div>
    </SwipeWrapper>
  );
};

export default ConversationList;
