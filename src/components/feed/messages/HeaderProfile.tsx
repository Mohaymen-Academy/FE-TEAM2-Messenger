import { Avatar, Paragraph } from "@/components/ui";
import { queryClient } from "@/providers/queryClientProvider";
import { formatDateDifference } from "@/utils/fromatDate";
import { ConversationTypes, StoreStateTypes, UserTypes } from "@/utils/types";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

interface HeaderProfileProps {
  selectedConversation?: ConversationTypes;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({
  selectedConversation,
}) => {
  useSelector((store: StoreStateTypes) => store.app.headerReRender);
  // console.log("HEADER RE RENDER");
  const subs = queryClient.getQueryData<{ data: any[] }>([
    "chat",
    selectedConversation?.chatType,
    selectedConversation?.chatId.toString(),
    "subs",
  ]);

  const currentUserId = queryClient.getQueryData<{ data: UserTypes }>([
    "user",
    "current",
  ])?.data?.userId;
  console.log("subs", subs);
  const subCount = subs?.data.length;
  const otherUser = subs?.data.find((subs) => {
    console.log("subUser", subs.userId);
    console.log("curr User in find", currentUserId);
    return subs.userId !== currentUserId;
  });
  console.log("curr User in code", currentUserId);
  const lastSeenTime = formatDateDifference(otherUser?.lastSeen);
  const subText = useMemo(() => {
    if (selectedConversation?.chatType === "PV") {
      if (lastSeenTime === "Online") {
        return "آنلاین";
      } else {
        return `آخرین بازدید در ${lastSeenTime}`;
      }
    } else {
      return subCount;
    }
  }, [subCount, otherUser, currentUserId, subs]);

  return (
    <div>
      <div className="flex gap-5 w-full justify-center items-center">
        <Avatar
          imgSrc={selectedConversation?.media?.filePath}
          avatarType="CHAT"
          chatType={selectedConversation?.chatType}
          className="w-12 h-12"
          chatId={selectedConversation?.chatId}
          isOnline={lastSeenTime === "Online"}
        />
        <div className="flex flex-col gap-1">
          <Paragraph size={"lg"}>{selectedConversation?.title}</Paragraph>
          <Paragraph size={"sm"}>{subText}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
