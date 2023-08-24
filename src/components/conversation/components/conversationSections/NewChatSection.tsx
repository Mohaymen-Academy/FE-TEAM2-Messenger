import SearchInput from "@/components/ui/SearchInput";
import Paragraph from "@/components/ui/Paragraph";
import { ContactTypes } from "@/utils/types";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { BsArrowRight } from "react-icons/bs";
import { setSection } from "@/redux/Slices/conversationSlice";
import { useDispatch } from "react-redux";
import { IconType } from "react-icons";
import UserItem from "../../../ui/UserItem";
import HoverWrapper from "@/components/wrappers/HoverWrapper";
import { newSectionsButtonObject } from "@/utils/constants";
import { useMutation } from "react-query";
import { createChat } from "@/services/api/chat";
import useToastify from "@/hooks/useTostify";
import { queryClient } from "@/providers/queryClientProvider";
import { useNavigate } from "react-router-dom";

type NewChatButtonProps = {
  text: string;
  Icon: IconType;
  target: "groupCreate" | "channelCreate" | "contactCreate";
};
const NewChatButton: React.FC<NewChatButtonProps> = ({
  Icon,
  text,
  target,
}) => {
  const dispatch = useDispatch();
  return (
    <HoverWrapper>
      <div
        onClick={() => dispatch(setSection({ selectedState: target }))}
        className="w-full flex gap-5 items-center cursor-pointer text-primary"
      >
        <Icon size={25} />
        <Paragraph className="m-0 mr-2">{text}</Paragraph>
      </div>
    </HoverWrapper>
  );
};

interface CreatePvSectionProps {
  contactsData: ContactTypes[];
}

const CreatePvSection: React.FC<CreatePvSectionProps> = ({ contactsData }) => {
  const dispatch = useDispatch();
  const toastify = useToastify();
  const navigate = useNavigate();
  const [loadingId, setLoadingId] = useState<number>();

  const { mutate: createPvMutation } = useMutation(createChat, {
    onMutate: (data) => setLoadingId(data.userIds && data.userIds[0]),
  });

  const onUserClickHandler = (cont: ContactTypes) => {
    createPvMutation(
      {
        userIds: [+cont.secondUserId],
        chatType: "PV",
        title: cont.firstName,
      },
      {
        onError: (error) => {
          toastify.error("ساخت چت با مشکل مواجه شد");
        },
        onSettled: () => {
          setLoadingId(undefined);
        },
        onSuccess: (data) => {
          const chatId = data.data.chatId;
          queryClient.invalidateQueries(["user", "current", "conversations"]);
          queryClient.refetchQueries(["user", "current", "conversations"]);

          navigate({ pathname: "/chat", search: `conversationId=${chatId}` });
          dispatch(setSection({ selectedState: "conversations" }));
        },
      }
    );
  };

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
          <span className="sr-only">بازگشت به منوی قبل</span>
          <BsArrowRight className="icon-button" size={25} />
        </Button>
        <div className="w-full">
          <SearchInput
            placeHolder="با چه کسی می‌خواهید صحبت کنید"
            searchIn="CONTACT"
          />
        </div>
      </div>

      <div className="w-full flex flex-col mb-2 border-y border-gray-200 dark:border-gray-500 p-2">
        {newSectionsButtonObject.map((btn) => (
          <NewChatButton
            key={btn.text}
            Icon={btn.icon}
            text={btn.text}
            target={btn.target}
          />
        ))}
      </div>
      <div className="w-full h-full overflow-y-auto custom-scrollbar scrollbar-none md:hover:scrollbar">
        {contactsData.map((cont) => (
          <UserItem
            key={cont.id}
            onClick={() => onUserClickHandler(cont)}
            user={cont}
            isLoading={loadingId === cont.secondUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatePvSection;
