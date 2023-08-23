import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes, UserTypes } from "@/utils/types";
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
import Media from "../Media";
import { store } from "@/redux/store";
import { setHeaderReRender } from "@/redux/Slices/appSlice";

interface MessagesProps {
  userId: string;
  conversationId: string;
}
const Messages: React.FC<MessagesProps> = ({}) => {
  const [URLSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const selectedConversation = URLSearchParams.get("conversationId");
  const selectedConversationObj = useSelector(
    (store: StoreStateTypes) => store.conversation.selectedConversation
  );
  const scrollDivRef = useRef<HTMLDivElement>(null);

  const theme = useSelector((store: StoreStateTypes) => store.app.theme);

  const optimisticCache =
    useSelector(
      (store: StoreStateTypes) =>
        store.message.optimisticCache[selectedConversation!]
    ) || [];

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
      onSuccess: () => {
        queryClient.refetchQueries([
          "chat",
          selectedConversationObj?.chatType,
          selectedConversationObj?.chatId.toString(),
          "subs",
        ]);

        dispatch(setHeaderReRender());
      },
    }
  );

  //current user data from cache
  const userData = queryClient.getQueryData(["user", "current"]) as {
    data: UserTypes;
  };

  const profileShow = useSelector(
    (store: StoreStateTypes) => store.profile.show
  );

  //extract message texts
  const messagesTexts = useMemo(() => {
    if (!messageData) return [];
    return messageData.pages.flat<any>().map((msg) => msg.text);
  }, [messageData]);

  // extract message Ids
  const messagesIds = useMemo(() => {
    if (!messageData) return [];
    return messageData.pages.flat<any>().map((msg) => msg.messageId);
  }, [messageData]);

  //create a edited message array combined with redux cache and server data
  const editedMessages = useMemo(() => {
    if (!messageData) return [];

    return [...optimisticCache, ...messageData.pages.flat()].sort(
      (a, b) => b.messageId - a.messageId
    );
  }, [messageData, optimisticCache]);

  //create final array of messages filter the cached messages and replace with real data if message sent successfully
  const toRenderMessages = useMemo(() => {
    if (!messagesTexts || !messagesIds) return [];
    if (!selectedConversation) return;

    return editedMessages.filter((msg) => {
      if (messagesTexts.includes(msg.text)) {
        const index = messagesTexts.indexOf(msg.text);
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
  }, [editedMessages, messagesTexts, messagesIds, selectedConversation]);

  useEffect(() => {
    scrollDivRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [optimisticCache?.length]);

  console.log(toRenderMessages);

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
          toRenderMessages && (
            <>
              <div ref={scrollDivRef}></div>
              {toRenderMessages.map((msg) => (
                <Message
                  message={msg}
                  key={msg.messageId}
                  messageStatus={
                    msg.isCache ? "PENDING" : msg.seen ? "SEEN" : "DELIVERED"
                  }
                  groupMessage={selectedConversationObj?.chatType === "GROUP"}
                  sentByCurrentUser={msg.userId === userData?.data?.userId}
                >
                  {msg.media && msg.media.filePath && (
                    <Media
                      mediaType={msg.media.fileMimeType}
                      src={msg.media.filePath}
                    />
                  )}

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
