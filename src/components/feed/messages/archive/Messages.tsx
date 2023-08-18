import clsx from "clsx";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getMessages } from "@/services/api/chat";
import Message from "../Message";
import Text from "../Text";
import { HAS_NEXT_PAGE_THRESHOLD, MESSAGE_PER_PAGE } from "@/utils/constants";
import { InView } from "react-intersection-observer";
import { BeatLoader } from "react-spinners";

interface MessagesProps {
  userId: string;
  conversationId: string;
}
const Messages: React.FC<MessagesProps> = ({}) => {
  const [URLSearchParams] = useSearchParams();
  const selectedConversation = URLSearchParams.get("conversationId");
  const theme = useSelector((store: StoreStateTypes) => store.app.theme);

  const Loader = () => (
    <div className="flex justify-center text-green-900">
      <BeatLoader color={theme === "dark" ? "#ffffff" : "#000000"} />
    </div>
  );

  const fetchMessages = async ({
    pageParam = { floor: 0, ceil: MESSAGE_PER_PAGE },
  }) => {
    if (!selectedConversation) return [];
    const getMessageParams = {
      chatId: selectedConversation,
      floor: pageParam.floor,
      ceil: pageParam.ceil,
    };
    const { data } = await getMessages(getMessageParams);
    return data;
  };

  const {
    isError,
    data: messageData,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useInfiniteQuery(
    [
      {
        user: "current",
        conversation: selectedConversation,
      },
    ],
    fetchMessages,
    {
      enabled: !!selectedConversation,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < HAS_NEXT_PAGE_THRESHOLD) {
          return null; // No more pages
        }
        const floor = allPages.length && allPages.length * MESSAGE_PER_PAGE;
        const ceil =
          allPages.length && (allPages.length + 1) * MESSAGE_PER_PAGE;

        return { floor, ceil };
      },
    }
  );

  const profileShow = useSelector(
    (store: StoreStateTypes) => store.profile.show
  );

  const messages = messageData?.pages.flat();

  return (
    <div className="flex flex-col h-full justify-end overflow-hidden">
      <div
        className={clsx(
          "flex flex-col-reverse overflow-auto h-full px-2 lg:px-[5%] xl:px-[10%] custom-scrollbar transition-[padding]",
          { "xl:!px-2": profileShow }
        )}
      >
        {isLoading ? (
          <Loader />
        ) : (
          messages && (
            <>
              {messages.map((msg) => (
                <Message
                  message={msg}
                  key={msg.messageId}
                  messageStatus="SEEN"
                  groupMessage={true}
                  sentByCurrentUser={false}
                >
                  <Text content={msg.text} />
                </Message>
              ))}
              {hasNextPage && (
                <InView
                  as="div"
                  onChange={(inView) => {
                    if (inView) {
                      fetchNextPage();
                    }
                  }}
                  style={{ margin: isError ? "0 0 0 0" : "1rem 0 1rem 0" }}
                >
                  {isFetchingNextPage && <Loader />}
                </InView>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Messages;
