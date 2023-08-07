import ConversationList from "./ConversationList";
import ThemeToggle from "./ThemeToggle";

interface ConversationWrapperProps {}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({}) => {
  return (
    <div className="w-full md:w-2/4 bg-gradient-to-tl from-[#a1a58bc8] dark:to-gray-800 dark:from-slate-900 from-10% to-[#8eb79899]  backdrop-blur-[5px] flex flex-col relative shadow-2xl shadow-lime-950 dark:shadow-neutral-800 rounded-l-3xl">
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
