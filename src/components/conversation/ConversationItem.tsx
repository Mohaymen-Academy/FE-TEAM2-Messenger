// import { useState } from "react";
import Paragraph from "../ui/Paragraph";
import { useNavigate, createSearchParams } from "react-router-dom";
import Avatar from "../ui/Avatar";
import test from "../../assets/img/darkBg.svg";
import UnreadMessages from "./components/UnreadMesseges";

interface ConversationItemProps {
  conversation: any;
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
      // setMenuOpen(true);
    }
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleClick}
      className={`flex justify-between p-3 cursor-pointer items-center hover:bg-black/20 gap-3 w-full relative rounded-3xl overflow-hidden ${
        isSelected && "bg-black/20"
      }`}
    >
      <div>
        <Avatar isConversationList={true} imgSrc={test} isOnline={false} />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between whitespace-nowrap w-full">
          <Paragraph className=" overflow-hidden font-extrabold text-ellipsis dark:!text-white !text-slate-800 ml-2">
            ابوالفصل علی
          </Paragraph>
          <Paragraph
            size={"xs"}
            className="text-sm text-bg-btn whitespace-nowrap"
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
          {true && <UnreadMessages unseen={unseenMessages} />}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
