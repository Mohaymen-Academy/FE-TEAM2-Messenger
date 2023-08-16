import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedButton, Button } from "../ui/";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { toggleShowConversations } from "@/redux/Slices/conversationSlice";
import { useNavigate } from "react-router-dom";
import { setShow } from "@/redux/Slices/profileSlice";
import HeaderProfile from "./messages/HeaderProfile";
import { HiPhone } from "react-icons/hi";
import { LiaSearchSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();
  const showConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.showConversations
  );
  const navigate = useNavigate();
  return (
    <div className="w-full h-[61px] bg-primary flex items-center px-2 justify-between">
      {/* <div></div> */}
      <div className="hidden md:block lg:hidden mt-2">
        <AnimatedButton
          FirstIcon={AiOutlineArrowLeft}
          SecondIcon={AiOutlineArrowRight}
          isActive={showConversation}
          onClick={() => dispatch(toggleShowConversations({}))}
        />
      </div>

      <HeaderProfile privateMessage={true} />
      <div className="flex gap-4 self-center">
        <Button
          variant={"ghost"}
          className="rounded-full h-10 w-10 dark:hover:bg-slate-200"
        >
          <HiPhone />
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full h-10 w-10 dark:hover:bg-slate-200"
        >
          <LiaSearchSolid />
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full h-10 w-10 dark:hover:bg-slate-200"
        >
          <BsThreeDotsVertical />
        </Button>
      </div>
    </div>
  );
};

export default Header;
