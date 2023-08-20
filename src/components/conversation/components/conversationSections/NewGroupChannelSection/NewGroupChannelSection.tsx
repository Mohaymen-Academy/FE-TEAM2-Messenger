import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { ContactTypes, StoreStateTypes } from "@/utils/types";
import { UserItem, Button, SearchInput } from "@/components/ui";
import { setSection } from "@/redux/Slices/conversationSlice";
import ChannelCreator from "./ChannelCreator";
import GroupCreator from "./GroupCreator";
import FadeMotionWrapper from "@/components/wrappers/FadeMotionWrapper";
import { useMutation } from "react-query";
import { createChat } from "@/services/api/chat";
import useToastify from "@/hooks/useTostify";
import { v4 as uuid4 } from "uuid";

interface UserSelect {
  onUserClickHandler: (user: string | number) => void;
  selectedUser: number[];
  contacts: ContactTypes[];
  show: boolean;
}

const UserSelect: React.FC<UserSelect> = ({
  onUserClickHandler,
  selectedUser,
  contacts,
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
          {contacts.map((cont) => (
            <UserItem
              key={cont.id}
              withCheck
              checked={selectedUser.includes(cont.id as number)}
              onClick={() => onUserClickHandler(cont.id)}
              user={cont}
            />
          ))}
        </div>
      </div>
    </FadeMotionWrapper>
  );
};

interface NewGroupChannelSectionProps {
  contactsData: ContactTypes[];
}

const NewGroupChannelSection: React.FC<NewGroupChannelSectionProps> = ({
  contactsData,
}) => {
  const [selectedUser, setSelectedUser] = useState<any>([]);
  const [step, setStep] = useState<1 | 2>(1);
  const toastify = useToastify();
  const section = useSelector(
    (store: StoreStateTypes) => store.conversation.section
  );

  // const sendPictureMutation = useMutation(sendPicture, {
  //   onError: (error) => {
  //     console.log(error);
  //     toastify.error("متاسفانه عکس ذخیره نگردید لطفا مجددا تلاش فرمایید");
  //   },
  // });

  const sendInfoMutation = useMutation(createChat, {
    onError: () => {
      toastify.error("اطلاعات دخیره نگردید لطفا مجددا تلاش فرمایید");
    },
    onSuccess: (data) => {
      toastify.info(
        `${
          data.data.chatType === "CHANNEL" ? "کانال" : "گروه"
        } با موفقیت ایجاد شد.`
      );
    },
  });

  const onUserClickHandler = (user: string | number) => {
    setSelectedUser((prev: any) => {
      if (prev.includes(user)) return prev.filter((name: any) => name !== user);
      else return [...prev, user];
    });
  };

  const { register, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: {
      channelName: "",
      channelBio: "",
      groupName: "",
      public: true,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const link = uuid4().replace(/-/g, "").substring(0, 20);

    if (section === "channelCreate") {
      sendInfoMutation.mutate(
        {
          title: data.channelName,
          bio: data.channelBio,
          link: `${link}`,
          chatType: "CHANNEL",
          userIds: selectedUser,
          public: data.public,
        },
        { onSuccess: () => {} }
      );
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
        contacts={contactsData}
        show={step === 1}
      />

      {section === "channelCreate" && (
        <ChannelCreator
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          show={step === 2}
          setValue={setValue}
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
            "dark:text-cyan-400 text-blue-600 cursor-pointer drop-shadow-lg self-end mb-2 ml-2 scale-100 transition absolute left-0 "
          )}
        >
          <AiFillCheckCircle size={70} />
        </div>
      )}
    </>
  );
};

export default NewGroupChannelSection;
