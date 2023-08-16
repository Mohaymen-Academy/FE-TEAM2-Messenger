import { Avatar, Button, Paragraph } from "@/components/ui";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import {LiaSearchSolid} from "react-icons/lia"

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
