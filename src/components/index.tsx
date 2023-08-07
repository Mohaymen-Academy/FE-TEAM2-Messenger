'use client';
import { Button, Flex } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import ConversationWrapper from './Conversation/ConversationWrapper';
import FeedWrapper from './Feed/FeedWrapper';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useLazyQuery, useMutation } from '@apollo/client';

import testOperations from '@/graphql/operations/test';
import { LogOutData, testData, testInput } from '@/util/types';

import { store } from '@/redux/Store';
import authSlice from '@/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import userOperations from '@/graphql/operations/user';
import Container from '../Common/Container';
import Header from './Header/Header';

interface ChatProps {}

const Chat: React.FC<ChatProps> = ({}) => {
  const [test, { data, loading, error }] = useLazyQuery<testData, testInput>(
    testOperations.Queries.test,
    { fetchPolicy: 'no-cache' }
  );

  const router = useRouter();
  return (
    <Flex
      className='
            transition-all
            h-full
            w-full
            2xl:h-[98%]
            rounded-none
            bg-zinc-700/40
            dark:bg-slate-800/70
            drop-shadow-2xl
            backdrop-blur-md
            flex-col
            overflow-hidden'>
      <Header />
      <Flex className='h-full bg-zinc-900'>
        <ConversationWrapper />
        <FeedWrapper />
      </Flex>
    </Flex>
  );
};

export default Chat;
