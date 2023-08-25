import ConversationList from "./ConversationList";
import { useSelector } from "react-redux";
import { ContactTypes, StoreStateTypes } from "@/utils/types";
import ConversationSectionWrapper from "./components/conversationSections/ConversationSectionWrapper";
import CreatePvSection from "./components/conversationSections/NewChatSection";
import NewGroupChannelSection from "./components/conversationSections/NewGroupChannelSection/NewGroupChannelSection";
import { useQuery } from "react-query";
import { getContacts } from "@/services/api/contact";
import NewContactSection from "./components/conversationSections/NewGroupChannelSection/NewContactSection";
import { useEffect } from "react";

interface ConversationWrapperProps {
  conversationShowCriteria?: string;
}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({
  conversationShowCriteria,
}) => {
  //get logged in user's contacts list and save in cache
  const contactQuery = useQuery(["user", "current", "contacts"], getContacts, {
    enabled: false,
  });
  const { filterBy } = useSelector((store: StoreStateTypes) => store.app);
  let contacts = contactQuery.data?.data;

  useEffect(() => {
    console.log(filterBy, "chat filterby");
    const data = contactQuery.data?.data;
    if (Array.isArray(filterBy)) {
      contacts = data.map(
        (contact: any) => filterBy?.includes(contact.secondUserId) && contact
      );
    } else {
      contacts = data;
    }
    console.log(contacts, "chat contacts");
  }, [filterBy]);

  console.log(contacts, "chat contacts out");

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
      <div className="w-full h-full bg-primary backdrop-blur-[5px] flex flex-col relative dark:shadow-neutral-800/50 rounded-l-none ">
        <ConversationSectionWrapper
          section="pvCreate"
          show={section === "pvCreate"}
        >
          <CreatePvSection contactsData={sortedContacts} />
        </ConversationSectionWrapper>
        <ConversationSectionWrapper
          section="publicCreate"
          show={section === "channelCreate" || section === "groupCreate"}
        >
          <NewGroupChannelSection contactsData={sortedContacts} />
        </ConversationSectionWrapper>

        <ConversationSectionWrapper
          section={"conversations"}
          show={section === "conversations"}
        >
          <ConversationList />
        </ConversationSectionWrapper>

        <ConversationSectionWrapper
          section="contactCreate"
          show={section === "contactCreate"}
        >
          <NewContactSection />
        </ConversationSectionWrapper>
      </div>
    </div>
  );
};

export default ConversationWrapper;
