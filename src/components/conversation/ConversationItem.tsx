// import { useState } from "react";
import Paragraph from "../ui/Paragraph";
import { useNavigate, createSearchParams } from "react-router-dom";
import Avatar from "../ui/Avatar";
import test from "../../assets/img/darkBg.svg";
import UnreadMessages from "./components/UnreadMesseges";
import { ChatItem } from "@/utils/types";
import HoverWrapper from "../wrappers/HoverWrapper";
import { useEffect } from "react";
import { getMessages } from "@/services/api/chat";
import { queryClient } from "@/providers/queryClientProvider";
import { useDispatch } from "react-redux";
import { setSelectedConversation } from "@/redux/Slices/conversationSlice";
import { formatDateDifference } from "@/utils/fromatData";

interface ConversationItemProps {
  conversation: ChatItem;
  onClickConversation: () => void;
  onDeleteConversation: () => void;
  isSelected: boolean;
  unseenMessages?: number;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  // onClickConversation,
  conversation,
  isSelected,
  unseenMessages = 10,
  // onDeleteConversation,
}) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const conversationLastMessage = conversation.lastMessage || "No messages yet";

  const handleClick = (event: React.MouseEvent) => {
    if (event.type === "click") {
      //change url search params to selected conversationId
      navigate({
        pathname: "/chat",
        search: createSearchParams({
          conversationId: conversation.chatId as string,
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
        ceil: 5,
      });
      return data;
    };

    //prefetch
    queryClient.prefetchInfiniteQuery({
      queryKey: [
        {
          user: "current",
          conversation: `${conversation.chatId}`,
        },
      ],
      queryFn: preFetchMessages,
    });
  }, []);

  return (
    <HoverWrapper type={isSelected ? "active" : "inActive"}>
      <div
        onClick={handleClick}
        onContextMenu={handleClick}
        className={`flex justify-between p-3 cursor-pointer items-center  gap-3 w-full relative rounded-3xl overflow-hidden ${
          isSelected && "bg-black/20"
        }`}
      >
        <div>
          <Avatar isConversationList={true} imgSrc={test} />
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
              {conversationLastMessage}
            </Paragraph>
            {true && <UnreadMessages unseen={unseenMessages} />}
          </div>
        </div>
      </div>
    </HoverWrapper>
  );
};

export default ConversationItem;
