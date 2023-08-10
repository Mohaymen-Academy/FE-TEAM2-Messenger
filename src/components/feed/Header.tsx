import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedButton, Button } from "../ui/";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { toggleShowConversations } from "@/redux/Slices/conversationSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const showConversation = useSelector(
    (store: StoreStateTypes) => store.conversation.showConversations
  );
  const navigate = useNavigate();
  return (
    <div className="w-full h-[61px] bg-primary flex items-center">
      <div className="hidden md:block">
        <AnimatedButton
          FirstIcon={AiOutlineArrowLeft}
          SecondIcon={AiOutlineArrowRight}
          isActive={showConversation}
          onClick={() => dispatch(toggleShowConversations({}))}
        />
      </div>
      <div className="block md:hidden">
        <Button
          className="group relative w-12 h-12 hover:bg-transparent dark:hover:bg-transparent md:hover:bg-btn-ghost"
          onClick={() => navigate("/chat")}
          variant="ghost"
        >
          <AiOutlineArrowRight size={30} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
