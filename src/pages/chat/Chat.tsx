import ConversationWrapper from "@/components/Conversation/ConversationWrapper";
import FeedWrapper from "@/components/Feed/FeedWrapper";
import Header from "@/components/Header/Header";

const Chat = () => {
  return (
    <div
      className="
            flex
            transition-all
            h-full
            w-full
            max-w-[1440px]
            m-auto
            rounded-none
            drop-shadow-2xl
            backdrop-blur-md
            flex-col
            overflow-hidden
            bg-neutral-300/"
    >
      {/* <Header /> */}
      <div className="flex h-full">
        <ConversationWrapper />
        <FeedWrapper />
      </div>
    </div>
  );
};

export default Chat;
