import messageOperations from '@/graphql/operations/message';
import { useMutation } from '@apollo/client';
import { Box, Button, Input, Textarea, border } from '@chakra-ui/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { sendMessageArgument } from '../../../../../../backend/src/util/types';
import { useSelector } from 'react-redux';
import { ObjectId } from 'bson';
import { MessagesData } from '@/util/types';
import { IconButton } from '@/components';
import { RiSendPlaneFill } from 'react-icons/ri';

interface MessageInputProps {
  conversationId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ conversationId }) => {
  const userId = useSelector((state: any) => state.auth.userId);
  const username = useSelector((state: any) => state.auth.username);
  const [messageBody, setMessageBody] = useState('');
  const [sendMessage] = useMutation<
    { sendMessage: boolean },
    sendMessageArgument
  >(messageOperations.Mutations.sendMessage);

  const onSubmitHandler = async () => {
    if (messageBody.length === 0) return;

    try {
      /// send mutation

      const messageId = new ObjectId().toString();
      const newMessage: sendMessageArgument = {
        id: messageId,
        senderId: userId,
        conversationId,
        body: messageBody,
      };

      setMessageBody('');

      const { data, errors } = await sendMessage({
        variables: { ...newMessage },
        optimisticResponse: {
          sendMessage: true,
        },
        update: (cache) => {
          const existing = cache.readQuery<MessagesData>({
            query: messageOperations.Queries.messages,
            variables: { conversationId },
          }) as MessagesData;

          cache.writeQuery<MessagesData, { conversationId: string }>({
            query: messageOperations.Queries.messages,
            variables: { conversationId },
            data: {
              ...existing,
              messages: [
                {
                  id: messageId,
                  body: messageBody,
                  senderId: userId,
                  conversationId,
                  sender: {
                    id: userId,
                    username: username,
                  },
                  createdAt: new Date(Date.now()),
                  updatedAt: new Date(Date.now()),
                },
                ...existing.messages,
              ],
            },
          });
        },
      });

      if (!data?.sendMessage || errors)
        throw new Error('failed to send the message');
    } catch (error: any) {
      console.log('send failed:', error);
      toast.error(error?.message);
    }
  };

  return (
    <Box className='p-6 w-full'>
      <form
        className='relative'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}>
        <Textarea
          resize='none'
          minH='2rem'
          height={''}
          paddingRight='4rem'
          borderRadius='2xl'
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
          onKeyUp={(e) => {
            if (e.code === 'Enter') {
              if (!e.shiftKey) {
                onSubmitHandler();
              }
            }
          }}
          _focus={{
            borderColor: 'whiteAlpha.300',
            border: '1px solid',
            boxShadow: 'none',
          }}
          className='no-scrollbar'
          placeholder='Write your message'></Textarea>
        <IconButton
          aria-label='send'
          pos='absolute'
          borderRadius='2xl'
          className='right-4 top-1/2 -translate-y-1/2 z-50'
          icon={<RiSendPlaneFill size={28} />}
          type='submit'
          sendButton
        />
      </form>
    </Box>
  );
};

export default MessageInput;
