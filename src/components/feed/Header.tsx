import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedButton, Button, ContextItem, ContextMenu } from "../ui/";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes, UserTypes, subTypes } from "@/utils/types";
import { toggleShowConversations } from "@/redux/Slices/conversationSlice";
import HeaderProfile from "./messages/HeaderProfile";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import ClickOutsideWrapper from "../wrappers/ClickOutsideWrapper";
import { MdDelete } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { deleteChat } from "@/services/api/chat";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/providers/queryClientProvider";
import useToastify from "@/hooks/useTostify";
import { removeUserFromChat } from "@/services/api/subs";

const Header = () => {
  const dispatch = useDispatch();
  const toastify = useToastify();
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const showConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.showConversations
  );
  const selectedConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.selectedConversation
  );
  const navigate = useNavigate();

  const { mutate: deleteConversationMutation } = useMutation(deleteChat, {
    onError: (error: any) => {
      if (error.response.data === "403 FORBIDDEN")
        toastify.error("شما اجازه حذف این مکالمه را ندارید");
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user", "current", "conversations"]);
      navigate("/chat");
    },
  });

  const { mutate: leaveConversationMutation } = useMutation(
    removeUserFromChat,
    {
      onError: (error: any) => {
        if (error.response.data === "403 FORBIDDEN")
          toastify.error("مشکلی به وجودآمده است لطفا مجدا تلاش نمایید");
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["user", "current", "conversations"]);
        navigate("/chat");
      },
    }
  );

  const deleteConversationHandler = () => {
    if (!selectedConversation) return;
    deleteConversationMutation(selectedConversation.chatId);
  };

  const onLeaveClickHandler = () => {
    if (!selectedConversation) return;
    const currentUserId = queryClient.getQueryData<{ data: UserTypes }>([
      "user",
      "current",
    ])?.data?.userId;
    const currentUserIdSubId = queryClient
      .getQueryData<{ data: subTypes[] }>([
        "chat",
        selectedConversation.chatType,
        selectedConversation.chatId.toString(),
        "subs",
      ])
      ?.data.find((sub) => sub.userId === currentUserId)?.subId;

    if (currentUserIdSubId) leaveConversationMutation(currentUserIdSubId);
  };

  return (
    <div className="w-full h-[70px] bg-primary flex items-center px-2 justify-between relative">
      <div className="flex justify-center items-center">
        <div className="hidden md:block  lg:hidden mt-2 ml-4">
          <AnimatedButton
            FirstIcon={AiOutlineArrowLeft}
            SecondIcon={AiOutlineArrowRight}
            isActive={showConversation}
            onClick={() => dispatch(toggleShowConversations())}
          />
        </div>

        <HeaderProfile selectedConversation={selectedConversation} />
      </div>

      <div className="flex gap-3 self-center">
        <Button
          onClick={() => setShowMoreOptions(true)}
          variant="ghost"
          className="p-1 dark:hover:bg-slate-600"
        >
          <span className="sr-only">نمایش گزینه های بیشتر</span>
          <BsThreeDotsVertical className="icon-button" size={23} />
        </Button>
      </div>
      {showMoreOptions && (
        <div className="absolute left-6 top-[70px] z-50">
          <ClickOutsideWrapper onOutsideClick={() => setShowMoreOptions(false)}>
            <ContextMenu>
              <ContextItem onCLick={onLeaveClickHandler} text="خروج از مکالمه">
                <IoExitOutline className="text-primary" size={20} />
              </ContextItem>
              <ContextItem
                onCLick={deleteConversationHandler}
                color="danger"
                text="حذف مکالمه"
              >
                <MdDelete className="text-red-500" size={20} />
              </ContextItem>
            </ContextMenu>
          </ClickOutsideWrapper>
        </div>
      )}
    </div>
  );
};

export default Header;
