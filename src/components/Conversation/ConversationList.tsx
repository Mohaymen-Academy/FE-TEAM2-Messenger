import { Box } from '@chakra-ui/react';
import {
  ConversationPopulated,
  ParticipantPopulated,
} from '../../../../../backend/src/util/types';
import ConversationItem from './conversationItem';
import { useSearchParams } from 'next/navigation';
import qs from 'querystring';
import { Fragment, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { conversationOperations } from '@/graphql/operations';
import { gql, useMutation, useSubscription } from '@apollo/client';
import {
  ConversationData,
  ConversationDeleteSubscriptionData,
  ConversationUpdatedData,
} from '@/util/types';
import { toast } from 'react-hot-toast';

interface ConversationListProps {
  conversations: Array<ConversationPopulated> | undefined;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = useSelector((state: any) => state.auth.userId);

  const selectedConversationId = qs.parse(
    searchParams.toString()
  ).conversationId;
  //////////////////////

  const [markConversationAsRead] = useMutation<
    { markConversationAsRead: boolean },
    { userId: string; conversationId: string }
  >(conversationOperations.Mutations.markConversationAsRead);
  //////////////////////

  const [deleteConversation] = useMutation<
    { deleteConversation: boolean },
    { conversationId: string }
  >(conversationOperations.Mutations.deleteConversation);
  /////////////////////

  useSubscription<ConversationUpdatedData>(
    conversationOperations.Subscriptions.conversationUpdated,
    {
      onData: ({ client, data }) => {
        const { data: subscriptionData } = data;

        if (!subscriptionData) return;
        const {
          conversationUpdated: { id: updatedConversationId },
        } = subscriptionData;

        const currentlyViewingConversation =
          updatedConversationId === selectedConversationId;

        if (currentlyViewingConversation) {
          onConversationClickHandler(selectedConversationId, false);
        }
      },
    }
  );

  useSubscription<ConversationDeleteSubscriptionData>(
    conversationOperations.Subscriptions.conversationDeleted,
    {
      onData: ({ client, data }) => {
        const { data: subscriptionData } = data;
        if (!subscriptionData) return;

        const existing = client.readQuery<ConversationData>({
          query: conversationOperations.Queries.conversations,
        });

        if (!existing) return;

        const { conversations } = existing;

        const {
          conversationDeleted: { id: deletedConversationId },
        } = subscriptionData;

        client.writeQuery<ConversationData>({
          query: conversationOperations.Queries.conversations,
          data: {
            conversations: conversations.filter(
              (c) => c.id !== deletedConversationId
            ),
          },
        });

        router.push('/');
      },
    }
  );

  const onConversationClickHandler = useCallback(
    async (
      conversationId: string,
      hasSeenLatestMessage: boolean | undefined
    ) => {
      const params = qs.parse(searchParams.toString());
      const newParams = { ...params, conversationId };
      router.push('?' + qs.stringify(newParams));

      //mark conversation as read if hasSeenLatestMessage is false
      if (hasSeenLatestMessage) return; //if already true not do anything

      try {
        await markConversationAsRead({
          variables: { conversationId, userId },
          optimisticResponse: { markConversationAsRead: true },
          update: (cache) => {
            // get conversation participant from cache
            const participantFragment = cache.readFragment<{
              participants: Array<ParticipantPopulated>;
            }>({
              id: `Conversation:${conversationId}`,
              fragment: gql`
                fragment Participants on Conversation {
                  participants {
                    user {
                      id
                      username
                    }
                    hasSeenLatestMassage
                  }
                }
              `,
            });
            if (!participantFragment) return;

            const participants = [...participantFragment.participants];
            const userParticipantIdx = participants.findIndex(
              (participant) => participant.user.id === userId
            );

            if (userParticipantIdx === -1) return;

            const userParticipant = participants[userParticipantIdx];

            //update participants to show latest message as read

            participants[userParticipantIdx] = {
              ...userParticipant,
              hasSeenLatestMassage: true,
            };

            //update cache

            cache.writeFragment({
              id: `Conversation:${conversationId}`,
              fragment: gql`
                fragment UpdatedParticipant on Conversation {
                  participants
                }
              `,
              data: {
                participants,
              },
            });
          },
        });
      } catch (error: any) {
        console.log('on view conversation error: mark as read');
      }
    },
    [searchParams]
  );

  const onDeleteConversation = async (conversationId: string) => {
    try {
      toast.promise(
        deleteConversation({
          variables: { conversationId },
          update: () => {
            router.replace(process.env.NEXT_PUBLIC_BASE_URL!);
          },
        }),
        {
          loading: 'Deleting conversation',
          success: 'Conversation deleted',
          error: 'Failed to delete conversation',
        }
      );
    } catch (error) {}
  };

  ///sort conversations by updatedAt field
  const sortedConversation = conversations
    ? [...conversations].sort((a, b) => {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      })
    : [];

  return (
    <Box className='w-full'>
      {sortedConversation?.map((conversation) => {
        const currentUserParticipant = conversation.participants.find(
          (p) => p.user.id === userId
        );
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
      })}
    </Box>
  );
};

export default ConversationList;
