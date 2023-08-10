import SearchInput from "@/components/ui/input/SearchInput";
import Avatar from "@/components/ui/avatar/Avatar";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import { User } from "@/utils/types";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button/Button";
import { BsArrowRight, BsFillCheckCircleFill } from "react-icons/bs";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";

type NewGroupChannelSectionProps = {
  users: User[];
};

type UserItemProps = {
  user: User;
  onClick: () => void;
  withCheck?: boolean;
};

const UserItem: React.FC<UserItemProps> = ({ user, onClick, withCheck }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className="hover:bg-slate-300 dark:hover:bg-slate-800 p-2 flex gap-4 cursor-pointer mx-2 rounded-lg items-center"
      onClick={() => setChecked((prev) => !prev)}
    >
      <div className="flex items-center  mr-4"></div>
      <div className="relative">
        <Avatar isOnline />
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
        <Paragraph size="lg">{user.name}</Paragraph>
        <Paragraph size="xs">اخیرا آنلاین بوده است</Paragraph>
      </div>
    </div>
  );
};

const NewGroupChannelSection: React.FC<NewGroupChannelSectionProps> = ({
  users,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex gap-2 w-full p-4">
        <Button
          onClick={() =>
            dispatch(setSection({ selectedState: "conversations" }))
          }
          variant="ghost"
          className="w-12 h-12 "
        >
          <BsArrowRight size={25} />
        </Button>
        <div className="w-full">
          <SearchInput placeHolder="چه کسانی را می‌خواهید اضافه نمایید" />
        </div>
      </div>

      <div className="w-full h-full overflow-y-auto custom-scrollbar scrollbar-none md:hover:scrollbar">
        {users.map((user) => (
          <UserItem
            key={user.name}
            withCheck
            onClick={() => console.log(user.name)}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default NewGroupChannelSection;
