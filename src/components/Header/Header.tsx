'use client';

import {
  Avatar,
  Flex,
  useColorMode,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import logoDark from '../../../../public/assets/logoDark.png';
import logoLight from '../../../../public/assets/logoLight.png';
import { userOperations } from '@/graphql/operations';
import { useMutation } from '@apollo/client';
import { LogOutData } from '@/util/types';

import { RiLogoutBoxLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import { BsSunFill } from 'react-icons/bs';
import { BsFillMoonStarsFill, BsBackspaceFill } from 'react-icons/bs';
import { BiCommentAdd } from 'react-icons/bi';

import { IconButton } from '@/components/Common';
import useConversationModal from '@/Hooks/useConversationModal';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const router = useRouter();
  const { onOpen } = useConversationModal();
  const { colorMode, toggleColorMode } = useColorMode();
  const [logOut] = useMutation<LogOutData, {}>(userOperations.Mutations.logOut);

  return (
    <Flex className='w-full shadow-md h-16'>
      <Flex className='md:w-2/4 p-2 justify-between items-center border-r-2 my-2 px-4'>
        <Image
          alt='logo'
          src={colorMode === 'dark' ? logoDark : logoLight}
          className='aspect-auto md:w-24 lg:w-36 hidden md:block '
        />
        <Flex
          gap='1rem'
          alignItems='center'
          className='flex-row-reverse'>
          <IconButton
            aria-label='add conversation'
            icon={<BiCommentAdd size={24} />}
            onClick={() => onOpen()}
          />
          <IconButton
            aria-label='color mode'
            icon={
              colorMode === 'dark' ? <BsSunFill /> : <BsFillMoonStarsFill />
            }
            onClick={toggleColorMode}
          />

          <Menu>
            <MenuButton aria-label='Options'>
              <Avatar
                shadow='md'
                name={useSelector((state: any) => state.auth.username)}
                size={{ base: 'sm', lg: 'md' }}
              />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<CgProfile size={20} />}>Profile</MenuItem>
              <MenuItem
                onClick={async () => {
                  await logOut();
                  router.refresh();
                }}
                icon={<RiLogoutBoxLine size={20} />}>
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex
        gap='2rem'
        className='w-full  items-center px-4'>
        <IconButton
          aria-label='color mode'
          icon={
            <BsBackspaceFill
              color='#ff000099'
              size={25}
            />
          }
          onClick={() => router.push('/')}
        />
        <Text
          fontSize='xl'
          fontWeight='bold'>
          abolfazl
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
