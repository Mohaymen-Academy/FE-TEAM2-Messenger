import React, { useEffect, useState } from "react";
import Paragraph from "@/ui/paragraph/Paragraph";
import { BsArrowLeft } from "react-icons/bs";
import Button from "@/ui/button/Button";
import ProfileColor from "./components/ProfileColor";
import { FiEdit2 } from "react-icons/fi";
import HoverWrapper from "../wrappers/HoverWrapper";
import Notification from "./components/Notification";
import Link from "./components/Link";

interface groupProfileProps {
  profileName: string;
  imgSrc?: string;
}

const GroupProfile: React.FC<groupProfileProps> = ({ profileName, imgSrc }) => {
  return (
    <div className="bg-primary w-[500px] h-screen shadow-lg shadow-slate-900">
      {/* Profile header and back button */}
      <div className="flex items-center py-2 px-4 justify-between">
        <div className="flex items-center">
          <Button variant="ghost" className="ml-3 h-12 w-12">
            <FiEdit2 className="icon-button" size={25} />
          </Button>
          <Paragraph size="xl">اطلاعات گروه</Paragraph>
        </div>
        <Button variant="ghost" className="h-12 w-12">
          <BsArrowLeft className="icon-button" size={25} />
        </Button>
      </div>

      {/* Show even profile image or solid color */}
      {/* Also add a gradient to show profile name and subscribers */}
      <div className="relative h-[40vh] max-h-[400px]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="عکس پروفایل"
            className="absolute w-full object-cover"
          />
        ) : (
          <ProfileColor name={profileName} />
        )}
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent dark:to-slate-700 to-white h-[80px] px-4 py-4 flex justify-between">
          <div>
            <Paragraph size="xl" className="select-none">
              {profileName}
            </Paragraph>
            <Paragraph size="sm" className="select-none">
              {"1200 عضو"}
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="py-3 flex flex-col gap-2">
        <div className="gap-2 px-3">
          <Link href="https://emochat/group/etxYasjlkfeletsadjflasjkdlfkjk" />
          <Notification />
        </div>
        <div className="bg-secondary h-3 w-full rounded-b"></div>
      </div>
    </div>
  );
};

export default GroupProfile;
