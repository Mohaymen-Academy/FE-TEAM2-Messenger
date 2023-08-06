import ConversationItem from "./conversationItem";

interface ConversationListProps {}

const ConversationList: React.FC<ConversationListProps> = ({}) => {
  // const onConversationClickHandler = useCallback(
  //   async (conversationId: string, hasSeenLatestMessage: boolean | undefined) => {
  //     const params = qs.parse(searchParams.toString());
  //     const newParams = { ...params, conversationId };
  //     router.push("?" + qs.stringify(newParams));

  //     //mark conversation as read if hasSeenLatestMessage is false
  //     if (hasSeenLatestMessage) return; //if already true not do anything

  //     try {
  //       await markConversationAsRead({
  //         variables: { conversationId, userId },
  //         optimisticResponse: { markConversationAsRead: true },
  //         update: (cache) => {
  //           // get conversation participant from cache
  //           const participantFragment = cache.readFragment<{
  //             participants: Array<ParticipantPopulated>;
  //           }>({
  //             id: `Conversation:${conversationId}`,
  //             fragment: gql`
  //               fragment Participants on Conversation {
  //                 participants {
  //                   user {
  //                     id
  //                     username
  //                   }
  //                   hasSeenLatestMassage
  //                 }
  //               }
  //             `,
  //           });
  //           if (!participantFragment) return;

  //           const participants = [...participantFragment.participants];
  //           const userParticipantIdx = participants.findIndex((participant) => participant.user.id === userId);

  //           if (userParticipantIdx === -1) return;

  //           const userParticipant = participants[userParticipantIdx];

  //           //update participants to show latest message as read

  //           participants[userParticipantIdx] = {
  //             ...userParticipant,
  //             hasSeenLatestMassage: true,
  //           };

  //           //update cache

  //           cache.writeFragment({
  //             id: `Conversation:${conversationId}`,
  //             fragment: gql`
  //               fragment UpdatedParticipant on Conversation {
  //                 participants
  //               }
  //             `,
  //             data: {
  //               participants,
  //             },
  //           });
  //         },
  //       });
  //     } catch (error: any) {
  //       console.log("on view conversation error: mark as read");
  //     }
  //   },
  //   [searchParams]
  // );

  // const onDeleteConversation = async (conversationId: string) => {
  //   try {
  //     toast.promise(
  //       deleteConversation({
  //         variables: { conversationId },
  //         update: () => {
  //           router.replace(process.env.NEXT_PUBLIC_BASE_URL!);
  //         },
  //       }),
  //       {
  //         loading: "Deleting conversation",
  //         success: "Conversation deleted",
  //         error: "Failed to delete conversation",
  //       }
  //     );
  //   } catch (error) {}
  // };

  ///sort conversations by updatedAt field
  // const sortedConversation = conversations
  //   ? [...conversations].sort((a, b) => {
  //       return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  //     })
  //   : [];

  return (
    <div className="w-full">
      {/* {sortedConversation?.map((conversation) => {
        const currentUserParticipant = conversation.participants.find((p) => p.user.id === userId);
        return (
          <ConversationItem
            key={conversation.id}
            onDeleteConversation={onDeleteConversation}
            onClickConversation={onConversationClickHandler}
            hasSeenLatestMassage={currentUserParticipant?.hasSeenLatestMassage}
            conversation={conversation}
            isSelected={selectedConversationId === conversation.id}
          />
        );
      })} */}
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
