import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { ConversationTypes, StoreStateTypes, UserTypes } from "@/utils/types";
import { useInfiniteQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMessages } from "@/services/api/chat";
import Message from "../Message";
import Text from "../Text";
import { HAS_NEXT_PAGE_THRESHOLD, MESSAGE_PER_PAGE } from "@/utils/constants";
import { InView } from "react-intersection-observer";
import { BeatLoader } from "react-spinners";
import { queryClient } from "@/providers/queryClientProvider";
import { useEffect, useMemo, useRef } from "react";
import Media from "../Media";
import { setHeaderReRender } from "@/redux/Slices/appSlice";
import { setLastMessageSeen } from "@/services/api/subs";

const Messages: React.FC = () => {
  const [URLSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedConversation = URLSearchParams.get("conversationId");
  const selectedConversationObj = useSelector(
    (store: StoreStateTypes) => store.conversation.selectedConversation
  );
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const messageDivRef = useRef<HTMLDivElement>(null);

  const theme = useSelector((store: StoreStateTypes) => store.app.theme);

  const optimisticCache =
    useSelector(
      (store: StoreStateTypes) =>
        store.message.optimisticCache[selectedConversation!]
    ) || [];
  const deletedMessages =
    useSelector(
      (store: StoreStateTypes) => store.message.optimisticCacheDeletedMessages
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
      staleTime: 1000,
      refetchInterval: 1000,
      retry: false,
      onSuccess: () => {
        queryClient.refetchQueries([
          "chat",
          selectedConversationObj?.chatType,
          selectedConversationObj?.chatId.toString(),
          "subs",
        ]);

        dispatch(setHeaderReRender());
      },
      onError: () => {
        const conversationsIds = queryClient
          .getQueryData<{
            data: ConversationTypes[];
          }>(["user", "current", "conversations"])
          ?.data.map((conv) => conv.chatId);
        if (!conversationsIds?.includes(+selectedConversation!)) {
          navigate("/chat");
        }
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
  // console.log(messageData);
  const memoKey = [
    messageData?.pages.map((page) => page.length).join("-"),
    messageData?.pageParams
      .map((page: any) => (page ? `${page.floor}-${page.ceil}` : "0-50"))
      .join("-"),
  ].join("-");

  //extract message texts
  const messagesTexts = useMemo(() => {
    if (!messageData) return [];
    return messageData.pages.flat<any>().map((msg) => msg.text);
  }, [memoKey]);

  // extract message Ids
  const messagesIds = useMemo(() => {
    if (!messageData) return [];
    return messageData.pages.flat<any>().map((msg) => msg.messageId);
  }, [memoKey]);

  //create a edited message array combined with redux cache and server data
  const editedMessages = useMemo(() => {
    if (!messageData) return [];

    return [...optimisticCache, ...messageData.pages.flat()].sort(
      (a, b) => b.messageId - a.messageId
    );
  }, [memoKey, optimisticCache, deletedMessages]);

  //create final array of messages filter the cached messages and replace with real data if message sent successfully
  const toRenderMessages = useMemo(() => {
    if (!messagesTexts || !messagesIds) return [];
    if (!selectedConversation) return [];

    return editedMessages.filter((msg) => {
      //if msg is in deletedMessages array (from redux) don't render it
      if (deletedMessages.includes(msg.messageId)) return false;

      //if msg and optimistic cache is equal delete optimistic cache msg
      if (messagesTexts.includes(msg.text)) {
        const index = messagesTexts.indexOf(msg.text);
        if (messagesIds[index] > msg.messageId && msg.isCache) {
          // dispatch(
          //   deleteOptimisticCache({
          //     chatId: selectedConversation,
          //     messageId: msg.messageId,
          //     prevCache: optimisticCache,
          //   })
          // );
          return false;
        }
      }
      return true;
    });
  }, [
    JSON.stringify(editedMessages),
    JSON.stringify(messagesTexts),
    JSON.stringify(messagesIds),
    selectedConversation,
    deletedMessages.length,
  ]);

  useEffect(() => {
    if (Math.abs(messageDivRef.current!.scrollTop) > 1000) {
      return;
    }
    scrollDivRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [toRenderMessages[0]?.messageId]);

  useEffect(() => {
    if (messagesIds[0]) setLastMessageSeen(messagesIds[0]);
  }, [selectedConversation, messagesIds[0]]);

  useEffect(() => {
    messageDivRef.current?.scrollTo({ top: 0 });
  }, [selectedConversation]);

  return (
    <div className="flex flex-col h-full justify-end overflow-hidden">
      <div
        ref={messageDivRef}
        className={clsx(
          "flex flex-col-reverse overflow-y-auto h-full px-2 lg:px-[5%] xl:px-[10%] custom-scrollbar transition-[padding]",
          { "xl:!px-2": profileShow }
        )}
      >
        {isLoading ? (
          <Loader />
        ) : (
          toRenderMessages && (
            <>
              <div ref={scrollDivRef}></div>
              {toRenderMessages.map((msg) => {
                // console.log(msg?.media, msg.media?.filePath);
                if (msg.isCache) {
                  console.log(msg);
                  console.log(!!msg.media, !!msg.media.filePath);
                }
                return (
                  <Message
                    message={msg}
                    conversation={{
                      id: selectedConversationObj?.chatId,
                      type: selectedConversationObj?.chatType,
                    }}
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
                        name={msg.media.fileName}
                        isCache={msg.isCache}
                      />
                    )}

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
