import { useNavigate, useSearchParams } from "react-router-dom";
import MessageInput from "./messages/MessageInput";
import Messages from "./messages/Messages";
import clsx from "clsx";
import Button from "../ui/button/Button";

interface FeedWrapperProps {
  userId: string;
}

const FeedWrapper: React.FC<FeedWrapperProps> = ({ userId }) => {
  const navigate = useNavigate();
  const [URLSearchParams] = useSearchParams();
  const selectedConversation = URLSearchParams.get("conversationId");
  return (
    <div
      className={clsx(
        "absolute left-[-100%] md:static h-full w-screen flex flex-col transition-[left] bg-black/20 md:bg-transparent dark:bg-transparent",
        {
          "left-[0%]": selectedConversation,
        }
      )}
    >
      <>
        <Button
          size={"sm"}
          className="w-1/4 mr-auto"
          onClick={() => {
            navigate("/chat");
          }}
        >
          back (for test)
        </Button>
        <div className="flex overflow-hidden justify-end h-[0px] flex-grow flex-col ">
          <Messages conversationId="12" userId={userId} />
        </div>
        <MessageInput />
      </>
    </div>
  );
};

export default FeedWrapper;
