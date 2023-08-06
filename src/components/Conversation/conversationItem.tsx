'use client';
import {
  Box,
  Stack,
  Text,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ConversationPopulated } from '../../../../../backend/src/util/types';
import { formatDistanceToNowStrict } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { FaDotCircle } from 'react-icons/fa';
import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

interface ConversationItemProps {
  conversation: ConversationPopulated;
  onClickConversation: (
    conversationId: string,
    hasSeenLatestMessage: boolean | undefined
  ) => void;
  onDeleteConversation: (conversationId: string) => void;
  isSelected: boolean;
  hasSeenLatestMassage: boolean | undefined;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  onClickConversation,
  conversation,
  isSelected,
  hasSeenLatestMassage,
  onDeleteConversation,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const conversationName =
    conversation?.name ||
    conversation?.participants.map((p) => p.user.username).join(', ');

  const conversationLatestMessage =
    conversation?.latestMessage?.body || 'No messages yet';

  const updateDate = formatDistanceToNowStrict(
    new Date(conversation.updatedAt)
  );

  const handleClick = (event: React.MouseEvent) => {
    if (event.type === 'click') {
      onClickConversation(conversation.id, hasSeenLatestMassage);
    } else if (event.type === 'contextmenu') {
      event.preventDefault();
      setMenuOpen(true);
    }
  };

  return (
    <Stack
      onClick={handleClick}
      onContextMenu={handleClick}
      direction='row'
      className={`p-3 my-2 cursor-pointer hover:bg-black/20 rounded-md w-full relative ${
        isSelected && 'bg-black/20'
      }
      items-center
      `}>
      <Menu
        isLazy
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}>
        <MenuList
          bg='whiteAlpha.400'
          className='p-2 backdrop-blur-sm'>
          <MenuItem
            bg='whiteAlpha.700'
            _hover={{ backgroundColor: 'whiteAlpha.600' }}
            color='rgb(38 38 38)'
            className='mb-2 rounded-lg font-semibold'
            icon={<FiEdit3 size={18} />}>
            Edit Conversation
          </MenuItem>
          {conversation?.participants.length > 2 ? (
            <MenuItem
              bg='whiteAlpha.700'
              _hover={{ backgroundColor: 'whiteAlpha.600' }}
              color={'rgb(256 0 0)'}
              className='rounded-lg font-semibold '
              icon={<RiDeleteBinLine size={18} />}
              onClick={(e) => {
                e.stopPropagation();
                onDeleteConversation(conversation.id);
              }}>
              Leave Group
            </MenuItem>
          ) : (
            <MenuItem
              bg='whiteAlpha.700'
              _hover={{ backgroundColor: 'whiteAlpha.600' }}
              color={'rgb(256 0 0)'}
              className='rounded-lg font-semibold'
              icon={<RiDeleteBinLine size={18} />}
              onClick={(e) => {
                e.stopPropagation();
                onDeleteConversation(conversation.id);
              }}>
              Delete and Leave
            </MenuItem>
          )}
          {false && (
            <MenuItem
              bg='whiteAlpha.700'
              _hover={{ backgroundColor: 'whiteAlpha.600' }}
              color={'rgb(256 0 0)'}
              className='rounded-lg font-semibold mt-2'
              icon={<RiDeleteBinLine size={18} />}
              onClick={(e) => {
                e.stopPropagation();
                onDeleteConversation(conversation.id);
              }}>
              Delete Group Chat
            </MenuItem>
          )}
        </MenuList>
      </Menu>
      {!hasSeenLatestMassage && (
        <Box className='absolute top-1 left-1'>
          <FaDotCircle color='#00ff0090' />
        </Box>
      )}
      <Avatar size='md' />
      <Box width='full'>
        <Flex className='items-center justify-between whitespace-nowrap w-full'>
          <Text className='text-white font-semibold xl:w-[12vw] md:w-[16vw] w-[65vw] overflow-hidden text-ellipsis'>
            {conversationName}
          </Text>
          <Text className='text-[0.75rem] text-neutral-200 whitespace-nowrap'>
            {updateDate}
          </Text>
        </Flex>

        <Text className='text-neutral-200 text-sm whitespace-nowrap xl:w-[12vw] md:w-[16vw] w-[70vw] overflow-hidden text-ellipsis'>
          {conversationLatestMessage}
        </Text>
      </Box>
    </Stack>
  );
};

export default ConversationItem;
