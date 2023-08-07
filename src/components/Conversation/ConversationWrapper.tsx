"use client";
// import { MoonLoader } from "react-spinners";
// import toast from "react-hot-toast";
import { BiCommentAdd } from "react-icons/bi";
import ConversationList from "./ConversationList";
import ThemeToggle from "../ThemeToggle";

interface ConversationWrapperProps {}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({}) => {
  return (
    <div className="w-full md:w-2/4 dark:bg-black/40 bg-white/50  backdrop-blur-[5px] flex flex-col relative shadow-lg rounded-l-3xl">
      <div className="flex flex-col h-full">
        <div className="p-2">
          <ThemeToggle />
        </div>
        <div className="h-full overflow-y-auto overflow-x-hidden">
          <ConversationList />
        </div>
        {/* <div className="flex w-full h-full justify-center items-center">
          <div
            // onClick={() => onOpen()}
            className="flex flex-col justify-center items-center text-xl font-bold cursor-pointer group"
          >
            <p>Create a Conversation</p>
            <BiCommentAdd className="text-[5rem] group-hover:scale-110 transition-all" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ConversationWrapper;
