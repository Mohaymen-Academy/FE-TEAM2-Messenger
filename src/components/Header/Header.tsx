"use client";

import logoDark from "../../../../public/assets/logoDark.png";
import logoLight from "../../../../public/assets/logoLight.png";

import { RiLogoutBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill, BsBackspaceFill } from "react-icons/bs";
import { BiCommentAdd } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  return (
    <div className="flex w-full shadow-md h-16">
      <div className="flex md:w-2/4 p-2 justify-between items-center border-r-2 my-2 px-4">
        <div className="flex-row-reverse items-center flex">
          {/* <IconButton aria-label="add conversation" icon={<BiCommentAdd size={24} />} onClick={() => onOpen()} />
          <IconButton
            aria-label="color mode"
            icon={colorMode === "dark" ? <BsSunFill /> : <BsFillMoonStarsFill />}
            onClick={toggleColorMode}
          /> */}
          <div className="w-12 h-12 bg-purple-300">A</div>

          {/* <Menu>
            <MenuButton aria-label="Options">
              <Avatar
                shadow="md"
                name={useSelector((state: any) => state.auth.username)}
                size={{ base: "sm", lg: "md" }}
              />
            </MenuButton>
            <MenuList>
              <MenuItem icon={<CgProfile size={20} />}>Profile</MenuItem>
              <MenuItem
                onClick={async () => {
                  await logOut();
                  router.refresh();
                }}
                icon={<RiLogoutBoxLine size={20} />}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Menu> */}
        </div>
      </div>
      <div className="flex w-full gap-8 items-center px-4">
        {/* <IconButton
          aria-label="color mode"
          icon={<BsBackspaceFill color="#ff000099" size={25} />}
          onClick={() => router.push("/")}
        /> */}
        <p className="font-bold text-xl">abolfazl</p>
      </div>
    </div>
  );
};

export default Header;
