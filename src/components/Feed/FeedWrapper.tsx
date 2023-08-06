'use client';
import { Flex, useColorMode } from '@chakra-ui/react';
import { useParams, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import MessageInput from './Messages/MessageInput';
import Messages from './Messages/Messages';

import logoDark from '../../../../public/assets/logoDark.png';
import logoLight from '../../../../public/assets/logoLight.png';

interface FeedWrapperProps {}

const FeedWrapper: React.FC<FeedWrapperProps> = ({}) => {
  const params = useSearchParams();
  const conversationId = params.get('conversationId');
  const userId = useSelector((state: any) => state.auth.userId);
  const { colorMode } = useColorMode();
  return (
    <Flex
      display={{ base: conversationId ? 'flex' : 'none', md: 'flex' }}
      className={`w-full flex-col`}>
      {conversationId && typeof conversationId === 'string' ? (
        <>
          <Flex className='overflow-hidden justify-end h-[0px] flex-grow flex-col'>
            <Messages
              conversationId={conversationId}
              userId={userId}
            />
          </Flex>
          <MessageInput conversationId={conversationId} />
        </>
      ) : (
        <Flex className='w-full h-full justify-center items-center'>
          <Image
            alt='logo'
            src={colorMode === 'dark' ? logoDark : logoLight}
            className='aspect-auto w-2/4 hidden md:block '
          />
        </Flex>
      )}
    </Flex>
  );
};

export default FeedWrapper;
