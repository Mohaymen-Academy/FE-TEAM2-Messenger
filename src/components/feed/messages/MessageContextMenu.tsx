import { ContextItem, ContextMenu } from "@/components/ui/";
import { MdDelete, MdOutlineContentCopy } from "react-icons/md";
import React from "react";

interface MessageContextMenuProps {
  onDeleteMessageHandler: () => void;
  onCopyMessageHandler: ()=> void;
}

const MessageContextMenu: React.FC<MessageContextMenuProps> = ({
  onDeleteMessageHandler,
  onCopyMessageHandler,
}) => {
  return (
    <ContextMenu>
      <ContextItem onCLick={onCopyMessageHandler} text="کپی">
        <MdOutlineContentCopy className="text-primary" />
      </ContextItem>

      <ContextItem onCLick={onDeleteMessageHandler} color="danger" text="حذف">
        <MdDelete className="text-red-500" />
      </ContextItem>
    </ContextMenu>
  );
};

export default MessageContextMenu;
