import ConversationWrapper from "@/components/conversation/ConversationWrapper";
import DesktopSidebar from "@/components/desktopSideBar/DesktopSidebar";
import FeedWrapper from "@/components/feed/FeedWrapper";

const Chat = () => {
  return (
    <div className="flex transition-all h-full w-full m-auto rounded-none drop-shadow-2xl flex-col overflow-hidden bg-lightGradient dark:bg-darkBg after:bg-lightIcons dark:after:bg-darkIcons bg-cover after:absolute after:w-full after:h-full after:-z-10 bg-slate-900">
      <div className="flex h-screen">
        <DesktopSidebar />
        <ConversationWrapper />
        <FeedWrapper userId="232" />
      </div>
    </div>
  );
};

export default Chat;
