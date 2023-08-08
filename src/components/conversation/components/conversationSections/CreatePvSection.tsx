import SearchInput from "@/components/ui/input/SearchInput";
import Avatar from "@/components/ui/avatar/Avatar";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import { User } from "@/utils/types";
import React from "react";
import Button from "@/components/ui/button/Button";
import { BsArrowRight } from "react-icons/bs";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";

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

const CreatePvSection: React.FC<CreatePvSectionProps> = ({ users }) => {
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
          <SearchInput />
        </div>
      </div>
      <div className="w-full h-full">
        {users.map((user) => (
          <UserItem onClick={() => console.log(user.name)} user={user} />
        ))}
      </div>
    </div>
  );
};

export default CreatePvSection;
