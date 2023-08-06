'use client';
import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import ConversationList from './ConversationList';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import conversationOperations from '@/graphql/operations/conversation';
import {
  ConversationCreatedSubscriptionData,
  ConversationData,
  ConversationUpdatedData,
  LogOutData,
} from '@/util/types';
import { MoonLoader } from 'react-spinners';
import { ConversationPopulated } from '../../../../../backend/src/util/types';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import useConversationModal from '@/Hooks/useConversationModal';
import { MdAddComment } from 'react-icons/md';
import { useRouter, useSearchParams } from 'next/navigation';
import userOperations from '@/graphql/operations/user';
import SkeletonLoader from '@/components/Common/Skeleton';
import axios from 'axios';
import { config } from 'process';
import { useSelector } from 'react-redux';
import { BiCommentAdd } from 'react-icons/bi';

interface ConversationWrapperProps {}

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({}) => {
  const params = useSearchParams();
  const { onOpen } = useConversationModal();
  const router = useRouter();
  const username = useSelector((state: any) => state.auth.username);

  const {
    data: conversationsData,
    loading: conversationsLoading,
    error: conversationsError,
    subscribeToMore,
  } = useQuery<ConversationData>(conversationOperations.Queries.conversations, {
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const subscribeToNewConversations = () => {
    subscribeToMore({
      document: conversationOperations.Subscriptions.conversationCreated,
      updateQuery: (
        prev,
        { subscriptionData }: ConversationCreatedSubscriptionData
      ) => {
        if (!subscriptionData.data) return prev;
        const newConversation = subscriptionData.data.conversationCreated;

        const isExisted = [...prev.conversations].some(
          (conver) => conver.id === newConversation.id
        );

        return Object.assign({}, prev, {
          conversations: isExisted
            ? [...prev.conversations]
            : [newConversation, ...prev.conversations],
        });
      },
    });
  };

  /**
   * Execute subscription on mount
   */
  useEffect(() => {
    subscribeToNewConversations();
  }, []);

  return (
    <Box
      display={{
        base: params.get('conversationId') ? 'none' : 'flex',
        md: 'flex',
      }}
      className='w-full md:w-2/4 lg:w-1/ bg-white/10 py-3 px-3 flex flex-col relative shadow-lg rounded-r-3xl'>
      <Box className='h-[calc(100vh-7rem)] overflow-y-auto'>
        {conversationsLoading ? (
          <SkeletonLoader
            count={5}
            width='full'
            height='80px'
          />
        ) : conversationsData?.conversations.length ? (
          <ConversationList conversations={conversationsData?.conversations} />
        ) : (
          <Flex className='w-full h-full justify-center items-center'>
            <Flex
              onClick={() => onOpen()}
              direction='column'
              className='justify-center items-center text-xl font-bold cursor-pointer group'>
              <Text>Create a Conversation</Text>
              <BiCommentAdd className='text-[5rem] group-hover:scale-110 transition-all' />
            </Flex>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default ConversationWrapper;
