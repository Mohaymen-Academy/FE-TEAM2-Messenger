import SwipeWrapper from "@/components/ui/SwipeWrapper";
import ConversationItem from "./ConversationItem";
import DesktopSidebar from "../desktopSideBar/DesktopSidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { AnimatedButton, SearchInput } from "../ui";
import { useQuery } from "react-query";
import { getAllChat } from "@/services/api/chat";
import { BounceLoader } from "react-spinners";
import { ChatItem } from "@/utils/types";
import { useSearchParams } from "react-router-dom";
import useToastify from "@/hooks/useTostify";

interface ConversationListProps {}

const ConversationList: React.FC<ConversationListProps> = ({}) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [URLSearchParams] = useSearchParams();
  const toastify = useToastify();
  const conversationItemsQueryResponse = useQuery(
    ["conversations"],
    getAllChat
  );
  const conversationItems = conversationItemsQueryResponse?.data?.data;

  const selectedConversation = URLSearchParams.get("conversationId");

  if (conversationItemsQueryResponse.isError) {
    toastify.error("مشکل در دریافت لیست مکالمات");
  }

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
                FirstIcon={GiHamburgerMenu}
                SecondIcon={RxCross1}
                isActive={showSideBar}
                onClick={() => setShowSideBar((prev) => !prev)}
              />
              <div className="w-full">
                <SearchInput placeHolder="جستجو" />
              </div>
            </div>
            <div className="h-full w-full overflow-y-auto overflow-x-hidden px-2 duration-500 custom-scrollbar scrollbar-none md:scrollbar">
              {conversationItemsQueryResponse.isError ? null : conversationItemsQueryResponse.isLoading ? (
                <div className="w-full h-full grid place-content-center">
                  <BounceLoader />
                </div>
              ) : (
                conversationItems.map((item: ChatItem) => (
                  <ConversationItem
                    key={item.chatId}
                    onDeleteConversation={() => {}}
                    onClickConversation={() => {}}
                    conversation={item}
                    isSelected={selectedConversation === item.chatId}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </SwipeWrapper>
  );
};

export default ConversationList;
