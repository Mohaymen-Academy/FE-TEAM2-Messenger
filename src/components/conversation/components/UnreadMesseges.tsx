import Paragraph from "@/components/ui/paragraph/Paragraph";
import React from "react";

interface unreadMessegesProps {
  unseens: number; // number of unread messages
}

const UnreadMesseges: React.FC<unreadMessegesProps> = ({ unseens }) => {
  return (
    <Paragraph
      size="sm"
      className="py-1 px-2 bg-online rounded-2xl !text-white dark:!text-slate-800 h-7 w-fit"
    >
      {unseens}
    </Paragraph>
  );
};

export default UnreadMesseges;
