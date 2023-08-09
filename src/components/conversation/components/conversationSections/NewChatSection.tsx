import SearchInput from "@/components/ui/input/SearchInput";
import Avatar from "@/components/ui/avatar/Avatar";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import { User } from "@/utils/types";
import React from "react";
import Button from "@/components/ui/button/Button";
import { BsArrowRight } from "react-icons/bs";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";

import { BsBroadcastPin, BsFillPeopleFill } from "react-icons/bs";
import { IconType } from "react-icons";

type CreatePvSectionProps = {
  users: User[];
};

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

type NewChatButtonProps = {
  text: string;
  Icon: IconType;
  target: "groupeCreate" | "channelCreate";
};
const NewChatButton: React.FC<NewChatButtonProps> = ({
  Icon,
  text,
  target,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setSection({ selectedState: target }))}
      className="w-full flex gap-5 items-center hover:bg-slate-600 px-5 py-4 dark:text-slate-400 cursor-pointer"
    >
      <Icon size={25} />
      <Paragraph className="m-0 mr-2">{text}</Paragraph>
    </div>
  );
};

const CreatePvSection: React.FC<CreatePvSectionProps> = ({ users }) => {
  const dispatch = useDispatch();
  const newSectionsButtonObject: {
    text: string;
    icon: IconType;
    target: "groupCreate" | "channelCreate";
  }[] = [
    { icon: BsFillPeopleFill, text: "گروه جدید", target: "groupCreate" },
    { icon: BsBroadcastPin, text: "کانال جدید", target: "channelCreate" },
  ];
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
          <SearchInput placeHolder="با چه کسی می‌خواهید صحبت کنید" />
        </div>
      </div>
      <div className="w-full flex flex-col pb-2 mb-2 border-y border-gray-200 dark:border-gray-500">
        {newSectionsButtonObject.map((btn) => (
          <NewChatButton Icon={btn.icon} text={btn.text} target={btn.target} />
        ))}
      </div>
      <div className="w-full h-full overflow-y-auto">
        {users.map((user) => (
          <UserItem onClick={() => console.log(user.name)} user={user} />
        ))}
        {users.map((user) => (
          <UserItem onClick={() => console.log(user.name)} user={user} />
        ))}
        {users.map((user) => (
          <UserItem onClick={() => console.log(user.name)} user={user} />
        ))}
      </div>
    </div>
  );
};

export default CreatePvSection;
