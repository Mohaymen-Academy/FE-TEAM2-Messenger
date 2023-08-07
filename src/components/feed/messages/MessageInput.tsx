import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { RiSendPlaneFill } from "react-icons/ri";
import TextArea from "@/components/feed/input/TextArea";

interface MessageInputProps {}

const MessageInput: React.FC<MessageInputProps> = ({}) => {
  const onSubmitHandler = async () => {};

  return (
    <div className="p-6 w-full">
      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <TextArea />
      </form>
    </div>
  );
};

export default MessageInput;
