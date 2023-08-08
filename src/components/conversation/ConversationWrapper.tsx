import { useSearchParams } from "react-router-dom";
import DesktopSidebar from "../desktopSideBar/DesktopSidebar";
import ConversationList from "./ConversationList";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import ConversationSectionWrapper from "./components/conversationSections/ConversationSectionWrapper";
import CreatePvSection from "./components/conversationSections/CreatePvSection";

interface ConversationWrapperProps {}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({}) => {
  const [URLSearchParams] = useSearchParams();
  const selectedConversation = URLSearchParams.get("conversationId");
  const section = useSelector(
    (state: StoreStateTypes) => state.conversation.section
  );
  console.log(section);
  return (
    <div
      className={clsx(
        "w-full md:w-4/5 xl:w-2/5 bg-gray-50 dark:bg-slate-700 backdrop-blur-[5px] flex flex-col relative shadow-2xl shadow-lime-950 dark:shadow-neutral-800/50 rounded-l-none md:rounded-l-3xl transition md:opacity-100 md:scale-100 ",
        { "opacity-0 scale-75": selectedConversation }
      )}
    >
      <ConversationSectionWrapper show={section === "pvCreate"}>
        <CreatePvSection
          users={[
            { name: "ابوالفضل" },
            { name: "غلی" },
            { name: "بهروز مادر خراب" },
            { name: "فاطمه مادر خراب" },
          ]}
        />
      </ConversationSectionWrapper>
      <ConversationSectionWrapper show={section === "conversations"}>
        <DesktopSidebar />
        <div className="flex flex-col h-full w-full">
          <div className="h-full overflow-y-auto overflow-x-hidden px-3">
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
      </ConversationSectionWrapper>
    </div>
  );
};

export default ConversationWrapper;
