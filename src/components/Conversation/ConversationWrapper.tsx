"use client";
// import { MoonLoader } from "react-spinners";
// import toast from "react-hot-toast";
import { BiCommentAdd } from "react-icons/bi";
import ConversationList from "./ConversationList";

interface ConversationWrapperProps {}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({}) => {
  return (
    <div className="w-full md:w-2/4 lg:w-1/ bg-white/10 py-3 px-3 flex flex-col relative shadow-lg rounded-r-3xl">
      <div className="h-[calc(100vh-7rem)] overflow-y-auto">
        <ConversationList />
        <div className="flex w-full h-full justify-center items-center">
          <div
            // onClick={() => onOpen()}
            className="flex flex-col justify-center items-center text-xl font-bold cursor-pointer group"
          >
            <p>Create a Conversation</p>
            <BiCommentAdd className="text-[5rem] group-hover:scale-110 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationWrapper;
