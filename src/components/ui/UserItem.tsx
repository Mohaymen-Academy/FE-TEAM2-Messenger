import { Avatar, Paragraph } from "@/components/ui";
import React from "react";
import { ContactTypes } from "@/utils/types";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type UserItemProps = {
  user: ContactTypes;
  onClick: () => void;
  withCheck?: boolean;
  checked?: boolean;
  isLoading?: boolean;
};
const UserItem: React.FC<UserItemProps> = ({
  user,
  withCheck,
  onClick,
  checked,
  isLoading,
}) => {
  console.log(isLoading)
  return (
    <div
      className="hover:bg-slate-300 dark:hover:bg-slate-800 p-2 flex gap-4 cursor-pointer mx-2 rounded-lg items-center justify-between"
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        <div className="relative">
          <Avatar isConversationList={true} isOnline />
          {withCheck && (
            <div
              style={{ transform: `scale(${checked ? 1.2 : 0})` }}
              className="absolute left-0 bottom-0 text-green-500 bg-black rounded-full transition-all"
            >
              <BsFillCheckCircleFill size={18} />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <Paragraph size="lg">{`${user.firstName} ${
            user.lastName ? user.lastName : ""
          }`}</Paragraph>
          <Paragraph size="xs">اخیرا آنلاین بوده است</Paragraph>
        </div>
      </div>

      {isLoading && (
        <Paragraph className="animate-spin ml-6">
          <AiOutlineLoading3Quarters size={30} />
        </Paragraph>
      )}
    </div>
  );
};

export default UserItem;
