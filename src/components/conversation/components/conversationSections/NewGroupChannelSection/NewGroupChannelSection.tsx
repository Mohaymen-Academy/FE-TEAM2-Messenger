import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { StoreStateTypes, User } from "@/utils/types";
import { UserItem, Button, SearchInput } from "@/components/ui";
import { setSection } from "@/redux/Slices/conversationSlice";
import ChannelCreator from "./ChannelCreator";
import GroupCreator from "./GroupCreator";
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
            onClick={() => dispatch(setSection({ selectedState: "pvCreate" }))}
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

  const section = useSelector(
    (store: StoreStateTypes) => store.conversation.section
  );

  const onUserClickHandler = (user: User) => {
    setSelectedUser((prev) => {
      if (prev.includes(user.name))
        return prev.filter((name) => name !== user.name);
      else return [...prev, user.name];
    });
  };

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      channelName: "",
      channelBio: "",
      groupName: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    console.log(selectedUser);

    if (section === "channelCreate") {
      /// logic to create channel
    }

    if (section === "groupCreate") {
      /// logic to create group
    }
  };

  return (
    <>
      <UserSelect
        onUserClickHandler={onUserClickHandler}
        selectedUser={selectedUser}
        users={users}
        show={step === 1}
      />

      {section === "channelCreate" && (
        <ChannelCreator
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          show={step === 2}
        />
      )}

      {section === "groupCreate" && (
        <GroupCreator
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          show={step === 2}
        />
      )}

      {step === 1 && (
        <div
          onClick={() => setStep(2)}
          className={clsx(
            "text-green-500 cursor-pointer drop-shadow-lg self-end mb-2 ml-2 scale-0 transition absolute left-0",
            { "scale-100": selectedUser.length > 0 }
          )}
        >
          <AiFillCheckCircle size={70} />
        </div>
      )}
    </>
  );
};

export default NewGroupChannelSection;
