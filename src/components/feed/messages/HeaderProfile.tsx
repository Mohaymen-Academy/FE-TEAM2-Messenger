import { Avatar, Paragraph } from "@/components/ui";
import React from "react";

interface HeaderProfileProps {
  privateMessage: boolean;
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({ privateMessage }) => {
  return (
    <div>
      {privateMessage && (
        <div className="flex gap-3 w-full">
          <Avatar className="w-12 h-12" />
          <div className="flex flex-col gap-2">
            <Paragraph className="!text-sm ">بهروز</Paragraph>
            <Paragraph className="self-end  !text-xs">
              آخرین بازدید به تازگی
            </Paragraph>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
