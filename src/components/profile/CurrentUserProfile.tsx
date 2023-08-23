import React from "react";
import SectionContainer from "./components/SectionContainer";
import SectionHeader from "./components/SectionHeader";
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
  const currentUser = queryClient.getQueryData<{ data: UserTypes }>([
    "user",
    "current",
  ]);

  const [, copyToClipboard] = useCopyToClipboard();

  const tostify = useToastify();

  const handleCopy = (text?: string) => {
    if (!text) return;
    copyToClipboard(text);
    tostify.info("نام کاربری کپی شد.");
  };

  if (!currentUser) return null;

  return (
    <SectionContainer>
      <SectionHeader title="پروفایل کاربر" withClose={true} />

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

      <div className="p-4 gap-2 flex flex-col overflow-y-auto">
        <ProfileItemWithIcon
          icon={<TbCameraPlus size={24} className="text-primary ml-4" />}
          title="افزودن عکس پروفایل"
        />

        <ProfileItemWithIcon
          icon={<TbPhone size={24} className="text-primary ml-4" />}
          title={currentUser.data.phoneNumber}
        />

        <ProfileItemWithIcon
          icon={<FiAtSign size={24} className="text-primary ml-4" />}
          title={currentUser?.data.userName}
          onClick={() => handleCopy(currentUser?.data.userName)}
        />

        <ProfileItemWithIcon
          icon={<span className="text-primary ml-4 font-bold">BIO</span>}
          title={currentUser?.data.bio}
        />

        {/* <div>
          <Paragraph className="break-all"></Paragraph>
          <Paragraph size="xs" className="text-secondary font-bold">
            تلفن
          </Paragraph>
        </div> */}
      </div>
    </SectionContainer>
  );
};

export default CurrentUserProfile;
