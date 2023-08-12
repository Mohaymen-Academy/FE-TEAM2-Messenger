import { Avatar, Paragraph } from "@/components/ui";
import React from "react";
import { User } from "@/utils/types";

type UserItemProps = {
  user: User;
  onClick: () => void;
};

const UserItem: React.FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      className="hover:bg-slate-300 dark:hover:bg-slate-800 p-2 flex gap-4 cursor-pointer mx-2 rounded-lg"
      onClick={onClick}
    >
      <Avatar isOnline />
      <div className="flex flex-col">
        <Paragraph size="lg">{user.name}</Paragraph>
        <Paragraph size="xs">اخیرا آنلاین بوده است</Paragraph>
      </div>
    </div>
  );
};

export default UserItem;
