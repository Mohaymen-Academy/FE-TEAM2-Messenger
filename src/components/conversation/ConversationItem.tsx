// import { useState } from "react";
import Paragraph from "../ui/Paragraph";
import { useNavigate, createSearchParams } from "react-router-dom";
import Avatar from "../ui/Avatar";
import UnreadMessages from "./components/UnreadMesseges";
import { ConversationTypes, UserTypes, subTypes } from "@/utils/types";
import HoverWrapper from "../wrappers/HoverWrapper";
import { useEffect } from "react";
import { getChat, getMessages } from "@/services/api/chat";
import { queryClient } from "@/providers/queryClientProvider";
import { useDispatch } from "react-redux";
import {
  setSelectedConversation,
  setSelectedConversationUserPermission,
} from "@/redux/Slices/conversationSlice";
import { formatDateDifference } from "@/utils/fromatDate";
import { MESSAGE_PER_PAGE } from "@/utils/constants";
import { getSubs } from "@/services/api/subs";
import { setSelectedProfile } from "@/redux/Slices/appSlice";
import { deleteHtmlTags } from "../editor/serializer";
import { useQuery } from "react-query";

interface ConversationItemProps {
  conversation: ConversationTypes;
  onClickConversation: () => void;
  onDeleteConversation: () => void;
  isSelected: boolean;
  unseenMessages: number;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  // onClickConversation,
  conversation,
  isSelected,
  unseenMessages,
  // onDeleteConversation,
}) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const conversationLastMessage = conversation.lastMessage || "No messages yet";
  const { data: chatData } = useQuery(
    ["chat", conversation.chatType, conversation.chatId.toString()],
    () => getChat(conversation.chatId),
    {
      cacheTime: Infinity,
      refetchInterval: 60 * 1000,
      refetchOnWindowFocus: false,
    }
  );

  const { data: subs } = useQuery(
    ["chat", conversation.chatType, conversation.chatId.toString(), "subs"],
    () => getSubs(conversation.chatId),
    {
      cacheTime: Infinity,
      refetchInterval: 60 * 1000,
      refetchOnWindowFocus: false,
    }
  );

  const currentUserId = queryClient.getQueryData<{ data: UserTypes }>([
    "user",
    "current",
  ])?.data?.userId;

  const otherUserId = subs?.data.find(
    (subs) => subs.userId !== currentUserId
  )?.userId;

  //get chat image blob from query cache
  const chatImageLocalSrc = queryClient.getQueryData<{ data: Blob }>([
    "binary",
    conversation?.media?.filePath?.split("/").at(-1),
  ])?.data;

  const handleClick = (event: React.MouseEvent) => {
    if (event.type === "click") {
      //change url search params to selected conversationId
      navigate({
        pathname: "/chat",
        search: createSearchParams({
          conversationId: `${conversation.chatId}`,
        }).toString(),
      });

      //save selected conversation data in redux
      dispatch(setSelectedConversation({ conversation }));
      dispatch(
        setSelectedConversationUserPermission({
          permissions: chatData?.data.permissions,
        })
      );
      dispatch(
        setSelectedProfile({
          selectedProfile: {
            conversationId: conversation.chatId,
            conversationType: conversation.chatType,
            imageUrl:
              chatImageLocalSrc && URL.createObjectURL(chatImageLocalSrc),
            profileType: conversation.chatType,
            userId: otherUserId,
          },
        })
      );
    } else if (event.type === "contextmenu") {
      event.preventDefault();
    }
  };

  //effect to prefetch first page of conversation's messages on mount
  useEffect(() => {
    //prefetch
    queryClient.prefetchInfiniteQuery({
      queryKey: ["user", "current", "conversations", `${conversation.chatId}`],
      queryFn: async () => {
        const { data } = await getMessages({
          chatId: `${conversation.chatId}`,
          floor: 0,
          ceil: MESSAGE_PER_PAGE,
        });
        return data.reverse();
      },
      cacheTime: Infinity,
    });
  }, []);

  const sentLastMessageText =
    formatDateDifference(conversation.sentAt) === "Online"
      ? "به تازگی"
      : formatDateDifference(conversation.sentAt);

  return (
    <HoverWrapper className="p-0" type={isSelected ? "active" : "inActive"}>
      <div
        onClick={handleClick}
        onContextMenu={handleClick}
        className={`flex justify-between cursor-pointer items-center p-4  gap-3 w-full relative rounded-3xl overflow-hidden`}
      >
        <div>
          <Avatar
            chatType={conversation.chatType}
            chatId={conversation.chatId}
            avatarType="CHAT"
            isConversationList={true}
            imgSrc={conversation.media?.filePath}
            userId={otherUserId}
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between whitespace-nowrap w-full">
            <Paragraph className=" overflow-hidden font-extrabold text-ellipsis dark:!text-white !text-slate-800 ml-2">
              {conversation.title}
            </Paragraph>
            <Paragraph className="!text-[12px] text-bg-btn whitespace-nowrap text-center bg-green-500/20 rounded-full px-2">
              {sentLastMessageText}
            </Paragraph>
          </div>

          <div className="flex justify-between items-center">
            <Paragraph
              size={"xs"}
              className="w-[120px] xs:w-[40vw] md:w-[200px] text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {conversation.chatType === "GROUP" &&
                conversation.userFirstName &&
                conversation.userFirstName + ": "}
              {deleteHtmlTags(conversationLastMessage)}
            </Paragraph>
            {(unseenMessages as number) > 0 && (
              <UnreadMessages unseen={unseenMessages as number} />
            )}
          </div>
        </div>
      </div>
    </HoverWrapper>
  );
};

export default ConversationItem;
