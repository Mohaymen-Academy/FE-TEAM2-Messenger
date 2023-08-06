import ConversationWrapper from "@/components/Conversation/ConversationWrapper";
import FeedWrapper from "@/components/Feed/FeedWrapper";
import Header from "@/components/Header/Header";

const Chat = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex bg-red-200">
        <ConversationWrapper />
        <FeedWrapper userId="121312" />H
      </div>
    </div>
  );
};

export default Chat;
