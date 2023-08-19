import ConversationList from "./ConversationList";
import { useSelector } from "react-redux";
import { ContactTypes, StoreStateTypes } from "@/utils/types";
import ConversationSectionWrapper from "./components/conversationSections/ConversationSectionWrapper";
import CreatePvSection from "./components/conversationSections/NewChatSection";
import NewGroupChannelSection from "./components/conversationSections/NewGroupChannelSection/NewGroupChannelSection";
import { useQuery } from "react-query";
import { getContacts } from "@/services/api/contact";

interface ConversationWrapperProps {
  conversationShowCriteria?: string;
}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({
  conversationShowCriteria,
}) => {
  //get logged in user's contacts list and save in cache
  const contactQuery = useQuery(["user", "current", "contacts"], getContacts);

  const contacts = contactQuery.data?.data;

  const sortedContacts =
    contacts &&
    contacts.sort((a: ContactTypes, b: ContactTypes) => {
      if (a.firstName > b.firstName) return 1;
      if (a.firstName < b.firstName) return -1;
      return 0;
    });

  const section = useSelector(
    (state: StoreStateTypes) => state.conversation.section
  );

  return (
    <div
      style={{
        right: conversationShowCriteria,
      }}
      className="h-full w-screen md:w-auto md:min-w-[480px] lg:static absolute right-0 transition-[right] z-10 rounded-2xl shadow-2xl"
    >
      <div className="w-full h-full bg-white dark:bg-slate-700 backdrop-blur-[5px] flex flex-col relative dark:shadow-neutral-800/50 rounded-l-none ">
        <ConversationSectionWrapper show={section === "pvCreate"}>
          <CreatePvSection contactsData={sortedContacts} />
        </ConversationSectionWrapper>
        <ConversationSectionWrapper
          show={section === "channelCreate" || section === "groupCreate"}
        >
          <NewGroupChannelSection contactsData={sortedContacts} />
        </ConversationSectionWrapper>
        <ConversationSectionWrapper show={section === "conversations"}>
          <ConversationList />
        </ConversationSectionWrapper>
      </div>
    </div>
  );
};

export default ConversationWrapper;
