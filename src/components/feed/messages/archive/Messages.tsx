import clsx from "clsx";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getChat } from "@/services/api/chat";

interface MessagesProps {
  userId: string;
  conversationId: string;
}
const Messages: React.FC<MessagesProps> = ({}) => {
  const [URLSearchParams] = useSearchParams();
  const selectedConversation = URLSearchParams.get("conversationId");
  const messagesQuery = useQuery(
    [
      "user",
      "currentUser",
      "Conversation",
      `conversation?${selectedConversation}`,
    ],
    () => {
      if (!selectedConversation) return null;
      return getChat(selectedConversation);
    }
  );
  const profileShow = useSelector(
    (store: StoreStateTypes) => store.profile.show
  );

  console.log(messagesQuery);
  return (
    <div className="flex flex-col h-full justify-end overflow-hidden">
      <div
        className={clsx(
          "flex flex-col-reverse overflow-auto h-full px-2 lg:px-[5%] xl:px-[10%] custom-scrollbar transition-[padding]",
          { "xl:!px-2": profileShow }
        )}
      >
        {/* {messagesQuery.isLoading? 'loading' : messagesQuery.isError? 'error' ? messagesQuery.data} */}
        {/* <Message
          messageStatus="SEEN"
          groupMessage={true}
          sentByCurrentUser={true}
        >
          <Text content="سلام جیگر طلاسشسشسسشسشسکمیمتیسبنتیستبمنیتبنبنیابنتیابنتیسزدتهیساعهیدسشتیهسشئزخسهتیهسشئطسشتینخسشئطستشیهختسشهخئسهخشیتختشستیخهسشیتخنسشتی" />
        </Message>
        <Message
          messageStatus="PENDING"
          groupMessage={true}
          sentByCurrentUser={false}
        >
          <Text content="سمیبنخهسیبتسیدزتسشایهتیدتسشیتهسشدیسشتیدتهسشدیتهسشیدسشدیسشهیادسشهدینتسیدهشسیتنسشدتنشیدشستبدیسشتدبتنشسبسشتدبتب" />
        </Message>
        <Message
          messageStatus="DELIVERED"
          groupMessage={false}
          sentByCurrentUser={true}
        >
          <Image src={avatar} />
        </Message>
        <Message groupMessage={false} sentByCurrentUser={false}>
          <Audio src={mu} />
        </Message> */}
      </div>
    </div>
  );
};

export default Messages;
