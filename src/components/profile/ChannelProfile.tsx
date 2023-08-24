import React from "react";
import ProfileColor from "./components/ProfileColor";
import Notification from "./components/Notification";
import Link from "./components/Link";
import SectionContainer from "./components/SectionContainer";
import { Paragraph, UserItem } from "../ui";
import { SectionHeaderWithEdit } from "./components/SectionHeader";
import { useQuery } from "react-query";
import { getSubs } from "@/services/api/subs";
interface channelProfileProps {
  profileName: string;
  imgSrc?: string;
  chatId?: number;
}

const ChannelProfile: React.FC<channelProfileProps> = ({
  profileName,
  imgSrc,
  chatId,
}) => {
  const { data: subData } = useQuery<any>(
    ["chat", "CHANNEL", chatId?.toString(), "subs"],
    () => getSubs(chatId!)
  );

  const subs = subData?.data;

  return (
    <SectionContainer>
      {/* Profile header and back button */}
      <SectionHeaderWithEdit withClose title="پروفایل کانال" />

      {/* Show even profile image or solid color */}
      {/* Also add a gradient to show profile name and subscribers */}
      <div className="relative h-[40vh] max-h-[400px]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="عکس پروفایل"
            className="w-full h-full object-cover "
          />
        ) : (
          <ProfileColor name={profileName} />
        )}
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent dark:to-slate-700 to-white h-[80px] px-4 py-4 flex justify-between">
          <div>
            <Paragraph size="xl" className="select-none">
              {profileName}
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
      <div className="h-full ">
        {subs &&
          subs.map((sub: any) => (
            <UserItem
              key={sub.userId}
              imageUrl={sub?.profile?.media?.filePath}
              user={sub}
              onClick={() => {}}
            />
          ))}
      </div>
    </SectionContainer>
  );
};

export default ChannelProfile;
