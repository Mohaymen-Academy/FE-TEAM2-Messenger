import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedButton, Button, ContextItem, ContextMenu } from "../ui/";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { toggleShowConversations } from "@/redux/Slices/conversationSlice";
import HeaderProfile from "./messages/HeaderProfile";
import { LiaSearchSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import ClickOutsideWrapper from "../wrappers/ClickOutsideWrapper";
import { MdDelete } from "react-icons/md";
import { deleteChat } from "@/services/api/chat";
import { useMutation } from "react-query";

const Header = () => {
  const dispatch = useDispatch();
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const showConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.showConversations
  );
  const selectedConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.selectedConversation
  );

  const { mutate: deleteConversationMutation } = useMutation(deleteChat);

  const deleteConversationHandler = () => {
    if (!selectedConversation) return;
    deleteConversationMutation(selectedConversation.chatId);
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
        <Button variant="ghost" className="p-1 dark:hover:bg-slate-600">
          <LiaSearchSolid className="icon-button" size={23} />
          <span className="sr-only">جست و جو در چت</span>
        </Button>
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
              <ContextItem
                onCLick={deleteConversationHandler}
                color="danger"
                text="حذف مکالمه"
              >
                <MdDelete className="text-red-500" />
              </ContextItem>
            </ContextMenu>
          </ClickOutsideWrapper>
        </div>
      )}
    </div>
  );
};

export default Header;
