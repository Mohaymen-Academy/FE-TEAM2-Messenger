import { Avatar, Paragraph } from "@/components/ui";
import { queryClient } from "@/providers/queryClientProvider";
import { formatDateDifference } from "@/utils/fromatData";
import { ChatTypes, ConversationTypes } from "@/utils/types";
import React from "react";

interface HeaderProfileProps {
  selectedConversation?: ConversationTypes;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({
  selectedConversation,
}) => {
  const subCount = queryClient.getQueryData<{ data: ChatTypes }>([
    "chat",
    selectedConversation?.chatType,
    selectedConversation?.chatId.toString(),
  ])?.data.subCount;

  const subText =
    selectedConversation?.chatType === "PV"
      ? selectedConversation?.sentAt
        ? `آخرین بازدید در ${formatDateDifference(selectedConversation.sentAt)}`
        : "آخرین بازدید به تازگی"
      : subCount && `${subCount} عضو`;

  return (
    <div>
      <div className="flex gap-5 w-full justify-center items-center">
        <Avatar
          imgSrc={selectedConversation?.media?.filePath}
          avatarType="CHAT"
          chatType={selectedConversation?.chatType}
          className="w-12 h-12"
          chatId={selectedConversation?.chatId}
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
