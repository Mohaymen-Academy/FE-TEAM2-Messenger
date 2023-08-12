import React from "react";
import Modal from "./ParentModal";
import { AnimatedButton, Button, Paragraph } from "../ui";
import { BiMoon, BiSun } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "@/redux/Slices/conversationSlice";
import { toggleTheme } from "@/redux/Slices/appSlice";

const LogOutConfirm = () => {
  return (
    <>
      <div className="bg-primary w-[280px] py-5 px-8 rounded-xl shadow shadow-gray-400">
        <Paragraph className="mb-6 text-center">
          آیا از خروج مطمئن هستید؟
        </Paragraph>
        <div className="flex justify-between gap-3">
          <Button className="w-full bg-red-500 transition-all duration-300 hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-500">
            بله
          </Button>
          <Button className="w-full transition-all duration-300">خیر</Button>
        </div>
      </div>
    </>
  );
};

const LogOutModal = () => {
  return <Modal body={<LogOutConfirm />} />;
};

export default LogOutModal;
