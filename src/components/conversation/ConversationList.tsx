import ConversationItem from "./ConversationItem";

interface ConversationListProps {}

const ConversationList: React.FC<ConversationListProps> = ({}) => {
  return (
    <div>
      <ConversationItem
        hasSeenLatestMassage
        onDeleteConversation={() => {}}
        onClickConversation={() => {}}
        conversation={{ a: 1 }}
        isSelected={false}
      />
    </div>
  );
};

export default ConversationList;
