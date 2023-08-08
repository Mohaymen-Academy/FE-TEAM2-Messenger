import ConversationWrapper from "@/components/conversation/ConversationWrapper";
import FeedWrapper from "@/components/feed/FeedWrapper";

const Chat = () => {
  return (
    <div className="flex transition-all h-screen w-screen m-auto rounded-none flex-col overflow-hidden relative before:absolute before:bg-lightGradient dark:before:bg-darkBg before:h-full before:w-full before:bg-cover after:bg-lightIcons dark:after:bg-darkIcons after:h-full after:w-full after:absolute before:z-10 after:z-20 max-w-[1920px]">
      <div className="absolute flex w-full h-full left-0 top-0 z-30">
        <ConversationWrapper />
        <FeedWrapper userId="232" />
      </div>
    </div>
  );
};

export default Chat;
