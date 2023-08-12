import React from "react";
import ProfileColor from "./components/ProfileColor";
import { Paragraph } from "../ui/";
import SectionContainer from "./components/SectionContainer";
import { SectionHeaderWithEdit } from "./components/SectionHeader";
import Link from "./components/Link";
import Notification from "./components/Notification";

interface userProfileProps {
  profileName: string;
  imgSrc?: string;
}

const UserProfile: React.FC<userProfileProps> = ({ profileName, imgSrc }) => {
  return (
    <SectionContainer>
      {/* Profile header and back button */}
      <SectionHeaderWithEdit title="اطلاعات کاربر" />

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
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent dark:to-slate-700 to-white h-[80px] px-4 py-4 flex justify-between items-center">
          <Paragraph size="xl" className="select-none">
            {profileName}
          </Paragraph>
        </div>
      </div>

      <div className="py-3 flex flex-col gap-2">
        <div className="gap-2 px-3">
          <Link href="https://emochat/group/etxYasjlkfeletsadjflasjkdlfkjk" />
          <Notification />
        </div>
        <div className="bg-secondary h-3 w-full rounded-b"></div>
      </div>
    </SectionContainer>
  );
};

export default UserProfile;
