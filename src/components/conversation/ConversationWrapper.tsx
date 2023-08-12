import ConversationList from "./ConversationList";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import ConversationSectionWrapper from "./components/conversationSections/ConversationSectionWrapper";
import CreatePvSection from "./components/conversationSections/NewChatSection";
import NewGroupChannelSection from "./components/conversationSections/NewGroupChannelSection";

interface ConversationWrapperProps {
  conversationShowCriteria?: string;
}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({
  conversationShowCriteria,
}) => {
  const section = useSelector(
    (state: StoreStateTypes) => state.conversation.section
  );

  return (
    <div
      style={{
        right: conversationShowCriteria,
      }}
      className="h-full w-screen md:w-auto md:min-w-[500px] lg:min-w-[600p] lg:static absolute right-0 transition-[right] z-10 rounded-2xl shadow-2xl"
    >
      <div className="w-full h-full bg-white dark:bg-slate-700 backdrop-blur-[5px] flex flex-col relative dark:shadow-neutral-800/50 rounded-l-none ">
        <ConversationSectionWrapper show={section === "pvCreate"}>
          <CreatePvSection
            users={[
              { name: "ابوالفضل" },
              { name: "غلی" },
              { name: "بهروز" },
              { name: "فاطمه " },
            ]}
          />
        </ConversationSectionWrapper>
        <ConversationSectionWrapper
          show={section === "channelCreate" || section === "groupCreate"}
        >
          <NewGroupChannelSection
            users={[
              { name: "ابوالفضل" },
              { name: "غلی" },
              { name: "بهروز" },
              { name: "فاطمه " },
            ]}
          />
        </ConversationSectionWrapper>
        <ConversationSectionWrapper show={section === "conversations"}>
          <ConversationList />
        </ConversationSectionWrapper>
      </div>
    </div>
  );
};

export default ConversationWrapper;
