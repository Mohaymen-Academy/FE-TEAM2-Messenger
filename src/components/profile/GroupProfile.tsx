import React from "react";
import ProfileColor from "./components/ProfileColor";
import Notification from "./components/Notification";
import Link from "./components/Link";
import SectionContainer from "./components/SectionContainer";
import { Paragraph, UserItem } from "../ui";
import { SectionHeaderWithEdit } from "./components/SectionHeader";
import { queryClient } from "@/providers/queryClientProvider";

interface groupProfileProps {
  profileName: string;
  imgSrc?: string;
  chatId?: number;
}

const GroupProfile: React.FC<groupProfileProps> = ({
  profileName,
  imgSrc,
  chatId,
}) => {
  const subData = queryClient.getQueryData<any>([
    "chat",
    "GROUP",
    chatId?.toString(),
    "subs",
  ]);

  const subs = subData?.data;

  return (
    <SectionContainer>
      <div className="flex flex-col">
        {/* Profile header and back button */}
        <SectionHeaderWithEdit withClose title="پروفایل گروه" />

        {/* Show even profile image or solid color */}
        {/* Also add a gradient to show profile name and subscribers */}
        <div className="relative h-[40vh] max-h-[400px]">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt="عکس پروفایل"
              className="absolute w-full object-cover h-full"
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
          <div className="bg-secondary h-2 w-full rounded-b"></div>
        </div>
        <div className="h-full ">
          {subs &&
            subs.map((sub: any) => (
              <UserItem
                imageUrl={sub?.profile?.media?.filePath}
                user={sub}
                onClick={() => {}}
              />
            ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default GroupProfile;
