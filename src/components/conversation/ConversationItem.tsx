// import { useState } from "react";
import Paragraph from "../ui/Paragraph";
import { useNavigate, createSearchParams } from "react-router-dom";
import Avatar from "../ui/Avatar";
import UnreadMessages from "./components/UnreadMesseges";
import { ConversationTypes } from "@/utils/types";
import HoverWrapper from "../wrappers/HoverWrapper";
import { useEffect } from "react";
import { getChat, getMessages } from "@/services/api/chat";
import { queryClient } from "@/providers/queryClientProvider";
import { useDispatch } from "react-redux";
import { setSelectedConversation } from "@/redux/Slices/conversationSlice";
import parse from "html-react-parser";

import { formatDateDifference } from "@/utils/fromatData";
import { MESSAGE_PER_PAGE } from "@/utils/constants";
import { getSubs } from "@/services/api/subs";

interface ConversationItemProps {
  conversation: ConversationTypes;
  onClickConversation: () => void;
  onDeleteConversation: () => void;
  isSelected: boolean;
  unseenMessages: number;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  // onClickConversation,
  conversation,
  isSelected,
  unseenMessages,
  // onDeleteConversation,
}) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const conversationLastMessage = conversation.lastMessage || "No messages yet";

  // const selectedConv = useSelector(
  //   (store: StoreStateTypes) => store.conversation.selectedConversation
  // );

  const handleClick = (event: React.MouseEvent) => {
    console.log(conversation);
    if (event.type === "click") {
      //change url search params to selected conversationId
      navigate({
        pathname: "/chat",
        search: createSearchParams({
          conversationId: `${conversation.chatId}`,
        }).toString(),
      });

      //save selected conversation data in redux
      dispatch(setSelectedConversation({ conversation }));
    } else if (event.type === "contextmenu") {
      event.preventDefault();
    }
  };

  //effect to prefetch first page of conversation's messages on mount
  useEffect(() => {
    const preFetchMessages = async () => {
      const { data } = await getMessages({
        chatId: `${conversation.chatId}`,
        floor: 0,
        ceil: MESSAGE_PER_PAGE,
      });
      return data.reverse();
    };

    //prefetch
    queryClient.prefetchInfiniteQuery({
      queryKey: ["user", "current", "conversations", `${conversation.chatId}`],
      queryFn: preFetchMessages,
    });

    queryClient.prefetchQuery(
      ["chat", conversation.chatType, conversation.chatId.toString()],
      () => getChat(conversation.chatId)
    );

    queryClient.prefetchQuery(
      ["chat", conversation.chatType, conversation.chatId.toString(), "subs"],
      () => getSubs(conversation.chatId)
    );
  }, []);

  console.log(conversationLastMessage);

  return (
    <HoverWrapper className="p-0" type={isSelected ? "active" : "inActive"}>
      <div
        onClick={handleClick}
        onContextMenu={handleClick}
        className={`flex justify-between cursor-pointer items-center p-4  gap-3 w-full relative rounded-3xl overflow-hidden`}
      >
        <div>
          <Avatar
            chatType={conversation.chatType}
            chatId={conversation.chatId}
            avatarType="CHAT"
            isConversationList={true}
            imgSrc={conversation.media?.filePath}
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between whitespace-nowrap w-full">
            <Paragraph className=" overflow-hidden font-extrabold text-ellipsis dark:!text-white !text-slate-800 ml-2">
              {conversation.title}
            </Paragraph>
            <Paragraph
              size={"xs"}
              className="text-sm text-bg-btn whitespace-nowrap"
            >
              {formatDateDifference(conversation.sentAt)}
            </Paragraph>
          </div>

          <div className="flex justify-between items-center">
            <Paragraph
              size={"sm"}
              className="w-[30ch] text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {parse(conversationLastMessage)}
            </Paragraph>
            {/* {true && <UnreadMessages unseen={unseenMessages} />} */}
            {unseenMessages > 0 && <UnreadMessages unseen={unseenMessages} />}
          </div>
        </div>
      </div>
    </HoverWrapper>
  );
};

export default ConversationItem;
