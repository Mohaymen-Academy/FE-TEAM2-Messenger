"use client";
import MessageInput from "./Messages/MessageInput";
import Messages from "./Messages/Messages";

interface FeedWrapperProps {
  userId: string;
}

const FeedWrapper: React.FC<FeedWrapperProps> = ({ userId }) => {
  return (
    <div className="w-full flex flex-col">
      <>
        <div className="flex overflow-hidden justify-end h-[0px] flex-grow flex-col ">
          <Messages conversationId="12" userId={userId} />
        </div>
        <MessageInput />
      </>
    </div>
  );
};

export default FeedWrapper;
