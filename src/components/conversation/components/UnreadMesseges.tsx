import Paragraph from "@/components/ui/paragraph/Paragraph";
import React from "react";

interface unreadMessagesProps {
  unseen: number; // number of unread messages
}

const UnreadMessages: React.FC<unreadMessagesProps> = ({ unseen }) => {
  return (
    <Paragraph
      size="sm"
      className="py-1 px-2 bg-online rounded-2xl !text-white dark:!text-slate-800 h-7 w-fit"
    >
      {unseen}
    </Paragraph>
  );
};

export default UnreadMessages;
