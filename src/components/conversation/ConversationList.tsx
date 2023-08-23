import SwipeWrapper from "@/components/ui/SwipeWrapper";
import ConversationItem from "./ConversationItem";
import DesktopSidebar from "../desktopSideBar/DesktopSidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { AnimatedButton, Paragraph, SearchInput } from "../ui";
import { useQuery } from "react-query";
import { getAllChat } from "@/services/api/chat";
import { ConversationTypes, StoreStateTypes } from "@/utils/types";
import { useSearchParams } from "react-router-dom";
import useToastify from "@/hooks/useTostify";
import FinalSkeleton from "../skeletonTest/FinalSkeleton";
import { useSelector } from "react-redux";

interface ConversationListProps {}

const ConversationList: React.FC<ConversationListProps> = ({}) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [URLSearchParams] = useSearchParams();
  const toastify = useToastify();
  const conversationItemsQueryResponse = useQuery(
    ["user", "current", "conversations"],
    getAllChat,
    { refetchInterval: 3000 }
  );
  const { filterBy } = useSelector((store: StoreStateTypes) => store.app);

  const conversationItems = conversationItemsQueryResponse?.data?.data;

  const selectedConversation = URLSearchParams.get("conversationId");

  if (conversationItemsQueryResponse.isError) {
    toastify.error("مشکل در دریافت لیست مکالمات");
  }

  const filteredConversations = (item: ConversationTypes) => {
    const conversation = (
      <ConversationItem
        key={item.chatId}
        onDeleteConversation={() => {}}
        onClickConversation={() => {}}
        conversation={item}
        isSelected={selectedConversation === `${item.chatId}`}
        unseenMessages={item.unSeenMessages}
      />
    );

    if (filterBy === undefined) {
      return conversation;
    } else if (filterBy === item.chatType) {
      return conversation;
    } else if (Array.isArray(filterBy) && filterBy.includes(item.chatId)) {
      return conversation;
    }
  };

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
                size={20}
                isActive={showSideBar}
                onClick={() => setShowSideBar((prev) => !prev)}
              />
              <div className="w-full">
                <SearchInput placeHolder="جستجو" searchIn="CONVERSATION" />
              </div>
            </div>
            <div className="h-full w-full overflow-y-auto overflow-x-hidden px-2 duration-500 custom-scrollbar scrollbar-none md:scrollbar">
              {conversationItemsQueryResponse.isLoading ? (
                <div className="w-full h-full">
                  <FinalSkeleton />
                </div>
              ) : conversationItemsQueryResponse.isError ? (
                <Paragraph>خطا در دریافت اطلاعات</Paragraph>
              ) : (
                conversationItems?.map((item: ConversationTypes) =>
                  filteredConversations(item)
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SwipeWrapper>
  );
};

export default ConversationList;
