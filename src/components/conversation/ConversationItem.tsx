// import { useState } from "react";
import Paragraph from "../ui/Paragraph";
import { useNavigate, createSearchParams } from "react-router-dom";
import Avatar from "../ui/Avatar";
import test from "../../assets/img/darkBg.svg";
import UnreadMessages from "./components/UnreadMesseges";
import { ChatItem } from "@/utils/types";
import HoverWrapper from "../wrappers/HoverWrapper";

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

  const conversationLastMessage = conversation.lastMessage || "No messages yet";

  const handleClick = (event: React.MouseEvent) => {
    if (event.type === "click") {
      navigate({
        pathname: "/chat",
        search: createSearchParams({
          conversationId: conversation.chatId as string,
        }).toString(),
      });
    } else if (event.type === "contextmenu") {
      event.preventDefault();
    }
  };

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
          <Avatar imgSrc={test} isOnline={false} />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between whitespace-nowrap w-full">
            <Paragraph className=" overflow-hidden font-extrabold text-ellipsis dark:!text-white !text-slate-800 ml-2">
              {conversation.title}
            </Paragraph>
            <Paragraph
              size={"xs"}
              className="text-sm text-neutral-200 whitespace-nowrap"
            >
              1402.12.30
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
