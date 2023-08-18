import { Avatar, Paragraph } from "@/components/ui";
import { formatDateDifference } from "@/utils/fromatData";
import React from "react";

interface HeaderProfileProps {
  title?: string;
  lastInteraction?: string;
  imageSrc?: string;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({
  title,
  lastInteraction,
  imageSrc,
}) => {
  const lastSeen = lastInteraction
    ? `آخرین بازدید در ${formatDateDifference(lastInteraction)}`
    : "آخرین بازدید به تازگی";
  return (
    <div>
      <div className="flex gap-3 w-full">
        <Avatar imgSrc={imageSrc} className="w-12 h-12" />
        <div className="flex flex-col gap-2">
          <Paragraph className="!text-sm ">{title}</Paragraph>
          <Paragraph className="self-end  !text-xs">{lastSeen}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
