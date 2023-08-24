import React from "react";
import ProfileColor from "./components/ProfileColor";
import { Paragraph } from "../ui/";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
import ProfileItemWithIcon from "./components/ProfileItemWithIcon";
import { FiAtSign } from "react-icons/fi";
import { TbPhone } from "react-icons/tb";
import { getOtherUser } from "@/services/api/user";
import { useQuery } from "react-query";
import { useCopyToClipboard } from "react-use";
import useToastify from "@/hooks/useTostify";

interface userProfileProps {
  profileName: string;
  imgSrc?: string;
  userId?: number;
}

const UserProfile: React.FC<userProfileProps> = ({
  profileName,
  imgSrc,
  userId,
}) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const toastify = useToastify();

  const handleCopy = (text?: string) => {
    if (!text) return;
    copyToClipboard(text);
    toastify.info("نام کاربری کپی شد.");
  };

  const { data, isLoading } = useQuery(
    ["user", userId?.toString()],
    () => {
      if (!userId) return null;
      return getOtherUser(userId);
    },
    { refetchInterval: 30 * 1000, cacheTime: Infinity }
  );

  const userData = data?.data;
  return (
    <SectionContainer>
      {/* Profile header and back button */}
      <SectionHeader withClose title="اطلاعات کاربر" />

      {/* Show either profile image or solid color */}
      {/* Also add a gradient to show profile name and subscribers */}
      <div className="relative h-[40vh] max-h-[400px]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="عکس پروفایل"
            className="absolute w-full h-full object-cover "
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

      <>
        <div className="p-4 gap-2 flex flex-col overflow-y-auto">
          <ProfileItemWithIcon
            isLoading={isLoading}
            icon={<TbPhone size={24} className="text-primary ml-4" />}
            title={userData?.phoneNumber}
          />

          <ProfileItemWithIcon
            isLoading={isLoading}
            icon={<FiAtSign size={24} className="text-primary ml-4" />}
            title={userData?.userName ? userData?.userName : "-"}
            onClick={() => handleCopy(userData?.userName)}
          />

          <ProfileItemWithIcon
            isLoading={isLoading}
            icon={<span className="text-primary ml-3 font-bold">BIO</span>}
            title={userData?.bio ? userData?.bio : "-"}
          />
        </div>
      </>
    </SectionContainer>
  );
};

export default UserProfile;
