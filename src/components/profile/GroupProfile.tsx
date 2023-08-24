import React from "react";
import ProfileColor from "./components/ProfileColor";
import Link from "./components/Link";
import SectionContainer from "./components/SectionContainer";
import { Paragraph, UserItem } from "../ui";
import { SectionHeaderWithEdit } from "./components/SectionHeader";
import { queryClient } from "@/providers/queryClientProvider";
import { ChatTypes } from "@/utils/types";

import { GrUserAdmin, GrUserAdd, GrEdit, GrPin, GrSend } from "react-icons/gr";

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

  const chatData = queryClient.getQueryData<{ data: ChatTypes }>([
    "chat",
    "GROUP",
    chatId?.toString(),
  ]);

  const subs = subData?.data;

  return (
    <SectionContainer>
      <div className="flex flex-col h-full">
        {/* Profile header and back button */}
        <SectionHeaderWithEdit withClose title="پروفایل گروه" />
        {/* Show even profile image or solid color */}
        {/* Also add a gradient to show profile name and subscribers */}
        <div className="relative h-[600px]">
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
              <Paragraph size="sm" className="select-none">
                {subs.length} عضو
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="py-3 flex flex-col gap-2">
          <div className="gap-2 px-3">
            <Link href={`https://iris.me/channel/${chatData?.data.link}`} />
          </div>
          <div className="border-y-[0.1px] dark:border-gray-800  py-4">
            <div className="flex flex-wrap gap-2 px-4">
              <Paragraph size="sm" className="">
                دسترسی‌ها‌:
              </Paragraph>
              {chatData?.data.permissions.includes("ADMIN") ? (
                <div className="flex gap-2 bg-red-200 rounded-xl px-2 justify-center items-center">
                  <GrUserAdmin />
                  ادمین
                </div>
              ) : (
                chatData?.data.permissions.map((per) => (
                  <>
                    {per === "ADD_USER" && (
                      <div className="flex gap-2 bg-red-200 rounded-xl px-2 justify-center items-center">
                        <GrUserAdd />
                        اضافه کردن کاربر
                      </div>
                    )}
                    {per === "CHANGE_CHAT_INFO" && (
                      <div className="flex gap-2 bg-red-200 rounded-xl px-2 justify-center items-center">
                        <GrEdit />
                        تغییر اطلاعات
                      </div>
                    )}
                    {per === "PIN_MESSAGE" && (
                      <div className="flex gap-2 bg-red-200 rounded-xl px-2 justify-center items-center">
                        <GrPin />
                        پین کردن پیام
                      </div>
                    )}
                    {per === "SEND_MESSAGE" && (
                      <div className="flex gap-2 bg-red-200 rounded-xl px-2 justify-center items-center">
                        <GrSend />
                        ارسال پیام
                      </div>
                    )}
                  </>
                ))
              )}
            </div>
          </div>
          {/* <div className="bg-secondary h-2 w-full rounded-b"></div> */}
        </div>
        <div className="h-full overflow-y-auto custom-scrollbar">
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
      </div>
    </SectionContainer>
  );
};

export default GroupProfile;
