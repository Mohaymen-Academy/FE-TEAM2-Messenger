import { FaDotCircle } from "react-icons/fa";
import { useState } from "react";
import Paragraph from "../ui/paragraph/Paragraph";
import { useNavigate, createSearchParams } from "react-router-dom";
import Avatar from "../ui/avatar/Avatar";
import test from "../../assets/img/darkBg.svg";
import UnreadMesseges from "./components/UnreadMesseges";

interface ConversationItemProps {
  conversation: any;
  onClickConversation: () => void;
  onDeleteConversation: () => void;
  isSelected: boolean;
  unseendMesseges: number;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  onClickConversation,
  conversation,
  isSelected,
  unseendMesseges,
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
      className={`flex justify-between p-3 my-2 cursor-pointer items-center hover:bg-slate-600 gap-3 w-full relative rounded-3xl overflow-hidden ${
        isSelected && "bg-black/20"
      }`}
    >
      <div>
        <Avatar imgSrc={test} isOnline={false} />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between whitespace-nowrap w-full">
          <Paragraph className="xl:w-[12vw] md:w-[16vw] w-[65vw] overflow-hidden font-extrabold text-ellipsis dark:!text-white !text-slate-800 ml-2">
            ابوالفصل علی ممد
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
            // className="whitespace-nowrap xl:w-[12vw] md:w-[16vw] w-[70vw] overflow-hidden text-ellipsis"
          >
            {conversationLatestMessage}
          </Paragraph>
          {true && <UnreadMesseges unseens={10} />}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
