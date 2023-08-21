import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { MessageTypes, StoreStateTypes, UserTypes } from "@/utils/types";
import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getMessages } from "@/services/api/chat";
import Message from "../Message";
import Text from "../Text";
import { HAS_NEXT_PAGE_THRESHOLD, MESSAGE_PER_PAGE } from "@/utils/constants";
import { InView } from "react-intersection-observer";
import { BeatLoader } from "react-spinners";
import { queryClient } from "@/providers/queryClientProvider";
import { useEffect, useMemo, useRef } from "react";
import { deleteOptimisticCache } from "@/redux/Slices/messageSlice";

interface MessagesProps {
  userId: string;
  conversationId: string;
}
const Messages: React.FC<MessagesProps> = ({}) => {
  const [URLSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const selectedConversation = URLSearchParams.get("conversationId");
  const scrollDivRef = useRef<HTMLDivElement>(null);

  const theme = useSelector((store: StoreStateTypes) => store.app.theme);

  const optimisticCache =
    useSelector(
      (store: StoreStateTypes) =>
        store.message.optimisticCache[selectedConversation!]
    ) || [];

  // console.log(optimisticCache);

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
    return data.reverse();
  };

  const {
    isError,
    data: messageData,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useInfiniteQuery(
    ["user", "current", "conversations", selectedConversation],
    fetchMessages,
    {
      enabled: true,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length <= HAS_NEXT_PAGE_THRESHOLD) {
          return null; // No more pages
        }
        const floor = allPages.length && allPages.length * MESSAGE_PER_PAGE;
        const ceil =
          allPages.length && (allPages.length + 1) * MESSAGE_PER_PAGE;

        return { floor, ceil };
      },
      staleTime: 360000,
      refetchInterval: 1000,
    }
  );

  const profileShow = useSelector(
    (store: StoreStateTypes) => store.profile.show
  );

  if (!messageData) return null; //render nothing if no message is found

  const messagesText = messageData?.pages.flat<any>().map((msg) => msg.text);
  const messagesIds = messageData?.pages
    .flat<any>()
    .map((msg) => msg.messageId);
  const messages = messageData?.pages.flat<any>();
  const editedMessages = [...optimisticCache, ...messageData.pages.flat()].sort(
    (a, b) => b.messageId - a.messageId
  );

  const toRenderMessages = editedMessages.filter((msg) => {
    if (messagesText.includes(msg.text)) {
      const index = messagesText.indexOf(msg.text);
      if (messagesIds[index] > msg.messageId && msg.isCache) {
        dispatch(
          deleteOptimisticCache({
            chatId: selectedConversation,
            messageId: msg.messageId,
            prevCache: optimisticCache,
          })
        );
        return false;
      }
    }
    return true;
  });

  console.log(toRenderMessages);

  const userData = queryClient.getQueryData(["user", "current"]) as {
    data: UserTypes;
  };

  useEffect(() => {
    scrollDivRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [optimisticCache]);

  return (
    <div className="flex flex-col h-[70vh] justify-end overflow-hidden">
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
              <div ref={scrollDivRef}></div>

              {toRenderMessages.map((msg) => {
                return (
                  <Message
                    message={msg}
                    key={msg.messageId}
                    messageStatus="SEEN"
                    groupMessage={true}
                    sentByCurrentUser={msg.userId === userData?.data?.userId}
                  >
                    <Text content={msg.text} />
                  </Message>
                );
              })}
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
