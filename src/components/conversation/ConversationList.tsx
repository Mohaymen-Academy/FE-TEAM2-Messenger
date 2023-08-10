import SwipeWrapper from "@/components/ui/SwipeWrapper";
import ConversationItem from "./ConversationItem";
import DesktopSidebar from "../desktopSideBar/DesktopSidebar";
import { useState } from "react";
import clsx from "clsx";
import { TbSettingsX, TbSettings } from "react-icons/tb";
import { AnimatedButton, Button, SearchInput } from "../ui";

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
        <DesktopSidebar showSideBar={showSideBar} />
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col w-full h-full">
            <div className="flex gap-2 w-full p-2 ">
              <AnimatedButton
                FirstIcon={TbSettings}
                SecondIcon={TbSettingsX}
                isActive={showSideBar}
                onClick={() => setShowSideBar((prev) => !prev)}
              />
              <div className="w-full">
                <SearchInput placeHolder="جستجو" />
              </div>
            </div>
            <div
              // style={{ paddingRight: showSideBar ? "90px" : "0.75rem" }}
              className="h-full w-full overflow-y-auto overflow-x-hidden px-2 duration-500 custom-scrollbar scrollbar-none md:scrollbar"
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
      </div>
    </SwipeWrapper>
  );
};

export default ConversationList;
