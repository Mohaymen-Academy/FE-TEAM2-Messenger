import { FaDotCircle } from "react-icons/fa";
import { useState } from "react";
import Paragraph from "../ui/paragraph/Paragraph";
import { useNavigate, createSearchParams } from "react-router-dom";

interface ConversationItemProps {
  conversation: any;
  onClickConversation: () => void;
  onDeleteConversation: () => void;
  isSelected: boolean;
  hasSeenLatestMassage: boolean | undefined;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  onClickConversation,
  conversation,
  isSelected,
  hasSeenLatestMassage,
  onDeleteConversation,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const conversationLatestMessage =
    conversation?.latestMessage?.body || "No messages yet";

  const handleClick = (event: React.MouseEvent) => {
    if (event.type === "click") {
      navigate({
        pathname: "/chat",
        search: createSearchParams({
          conversationId: "111111",
        }).toString(),
      });
    } else if (event.type === "contextmenu") {
      event.preventDefault();
      setMenuOpen(true);
    }
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleClick}
      className={`flex p-3 my-2 cursor-pointer hover:bg-black/20 rounded-xl w-full relative ${
        isSelected && "bg-black/20"
      }
      items-center
      `}
    >
      {!hasSeenLatestMassage && (
        <div className="absolute top-1 left-1">
          <FaDotCircle color="#00ff0090" />
        </div>
      )}
      <div className="w-12 h12 bg-red-200 ">A</div>
      <div className="w-full">
        <div className="flex items-center justify-between whitespace-nowrap w-full">
          <Paragraph className="xl:w-[12vw] md:w-[16vw] w-[65vw] overflow-hidden text-ellipsis">
            ابوالفصل علی ممد
          </Paragraph>
          <p className="text-[0.75rem] text-neutral-200 whitespace-nowrap">
            1402.12.30
          </p>
        </div>

        <Paragraph
          size={"sm"}
          className="whitespace-nowrap xl:w-[12vw] md:w-[16vw] w-[70vw] overflow-hidden text-ellipsis"
        >
          {conversationLatestMessage}
        </Paragraph>
      </div>
    </div>
  );
};

export default ConversationItem;
