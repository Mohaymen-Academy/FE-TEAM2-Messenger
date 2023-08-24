import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedButton, Button } from "../ui/";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { toggleShowConversations } from "@/redux/Slices/conversationSlice";
import HeaderProfile from "./messages/HeaderProfile";
import { LiaSearchSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();
  const showConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.showConversations
  );
  const selectedConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.selectedConversation
  );
  return (
    <div className="w-full h-[70px] bg-primary flex items-center px-2 justify-between">
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
        </Button>
        <Button variant="ghost" className="p-1 dark:hover:bg-slate-600">
          <BsThreeDotsVertical className="icon-button" size={23} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
