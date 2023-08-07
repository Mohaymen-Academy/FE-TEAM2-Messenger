import ConversationWrapper from "@/components/conversation/ConversationWrapper";
import FeedWrapper from "@/components/feed/FeedWrapper";

const Chat = () => {
  return (
    <div
      className="

            flex transition-all h-full w-full m-auto rounded-none drop-shadow-2xl backdrop-blur-md flex-col overflow-hidden bg-lightGradient dark:bg-darkBg after:bg-lightIcons dark:after:bg-darkIcons bg-cover after:absolute after:w-full after:h-full after:-z-10 before:absolute before:w-full before:h-full before:bg-icons"
    >
      {/* <Header /> */}
      <div className="flex h-full">
        <ConversationWrapper />

        <FeedWrapper userId="232" />
      </div>
    </div>
  );
};

export default Chat;
