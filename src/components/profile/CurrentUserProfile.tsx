import React from "react";
import SectionContainer from "./components/SectionContainer";
import { SectionHeaderWithEdit } from "./components/SectionHeader";
import { Paragraph } from "../ui";
import { queryClient } from "@/providers/queryClientProvider";
import ProfileItemWithIcon from "./components/ProfileItemWithIcon";
import { TbCameraPlus, TbPhone } from "react-icons/tb";
import ProfileColor from "./components/ProfileColor";
import { FiAtSign } from "react-icons/fi";
import useToastify from "@/hooks/useTostify";
import { useCopyToClipboard } from "react-use";
import { UserTypes } from "@/utils/types";

interface currentUserProfile {
  imgSrc?: string;
  profileName: string;
}

const CurrentUserProfile: React.FC<currentUserProfile> = ({
  imgSrc,
  profileName,
}) => {
  const currentUserData = queryClient.getQueryData<{ data: UserTypes }>([
    "user",
    "current",
  ]);

  const currentUser = currentUserData?.data;

  const [_, copyToClipboard] = useCopyToClipboard();

  const tostify = useToastify();

  const handleCopy = (text?: string) => {
    if (!text) return;
    copyToClipboard(text);
    tostify.info("نام کاربری کپی شد.");
  };

  console.log(currentUser);

  if (!currentUser) return null;

  return (
    <SectionContainer>
      <SectionHeaderWithEdit title="پروفایل کاربر" withClose={true} />

      <div className="relative h-[40vh] max-h-[400px] bg-green-300">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="عکس پروفایل"
            className="w-full h-full object-cover "
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

      <div className="p-4 gap-2 flex flex-col overflow-y-auto">
        <ProfileItemWithIcon
          icon={<TbCameraPlus size={24} className="text-primary ml-4" />}
          title="تغییر عکس پروفایل"
        />

        <ProfileItemWithIcon
          icon={<TbPhone size={24} className="text-primary ml-4" />}
          title={currentUser.phoneNumber}
        />

        <ProfileItemWithIcon
          icon={<FiAtSign size={24} className="text-primary ml-4" />}
          title={currentUser.userName ? currentUser.userName : "-"}
          onClick={() => handleCopy(currentUser.userName)}
        />

        <ProfileItemWithIcon
          icon={<span className="text-primary ml-4 font-bold">BIO</span>}
          title={currentUser.bio ? currentUser.bio : "-"}
        />
      </div>
    </SectionContainer>
  );
};

export default CurrentUserProfile;
