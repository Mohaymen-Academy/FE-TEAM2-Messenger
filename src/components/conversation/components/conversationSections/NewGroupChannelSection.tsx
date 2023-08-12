import SearchInput from "@/components/ui/SearchInput";
import { User } from "@/utils/types";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { BsArrowRight } from "react-icons/bs";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import clsx from "clsx";
import UserItem from "./UserItem";
import { AnimatePresence, motion } from "framer-motion";
import GroupCreator from "@/components/profile/GroupCreator";
import ChannelCreator from "@/components/profile/ChannelCreator";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";

interface UserSelect {
  onUserClickHandler: (user: User) => void;
  selectedUser: string[];
  users: User[];
  show: boolean;
}

const UserSelect: React.FC<UserSelect> = ({
  onUserClickHandler,
  selectedUser,
  users,
  show,
}) => {
  const dispatch = useDispatch();

  return (
    <FadeMotionWrapper show={show}>
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
              checked={selectedUser.includes(user.name)}
              onClick={() => onUserClickHandler(user)}
              user={user}
            />
          ))}
        </div>
      </div>
    </FadeMotionWrapper>
  );
};

type NewGroupChannelSectionProps = {
  users: User[];
};

const NewGroupChannelSection: React.FC<NewGroupChannelSectionProps> = ({
  users,
}) => {
  const [selectedUser, setSelectedUser] = useState<string[]>([]);
  const [step, setStep] = useState<1 | 2>(1);

  const onUserClickHandler = (user: User) => {
    setSelectedUser((prev) => {
      if (prev.includes(user.name))
        return prev.filter((name) => name !== user.name);
      else return [...prev, user.name];
    });
  };

  return (
    <>
      <UserSelect
        onUserClickHandler={onUserClickHandler}
        selectedUser={selectedUser}
        users={users}
        show={step === 1}
      />
      <ChannelCreator show={step === 2} />

      <div
        onClick={() => setStep(2)}
        className={clsx(
          "text-green-500 drop-shadow-lg self-end mb-2 ml-2 scale-0 transition absolute left-0",
          { "scale-100": true }
        )}
      >
        <AiFillCheckCircle size={70} />
      </div>
    </>
  );
};

export default NewGroupChannelSection;
