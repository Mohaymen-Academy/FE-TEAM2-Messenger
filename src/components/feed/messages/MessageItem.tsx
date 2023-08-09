import Avatar from "@/components/ui/avatar/Avatar";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import clsx from "clsx";
import avatar from "../../../assets/img/avatar.jpg";

interface MessageItemProps {
  message: string;
  sentByCurrentUser: boolean;
  groupMessage : boolean
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  sentByCurrentUser,
  groupMessage
}) => {
  return (
    <div
      className={`
      flex-row
        p-4
        gap-4
        justify-${sentByCurrentUser ? "end" : "start"}
    `}
    >
      {!sentByCurrentUser && groupMessage && (
        <div className="flex justify-end ">
          <Avatar imgSrc={avatar} className="mb-3" isOnline />
        </div>
      )}
      <div className="flex flex-col gap-1 w-full">
        <div
          className={`
          flex
          items-center
          gap-2
          justify-${sentByCurrentUser ? "start" : "end"}
          ${!sentByCurrentUser && "flex-row-reverse self-end"}
          
        `}
        ></div>
        <div
          className={`
          flex 
          justify-${sentByCurrentUser ? "start" : "end"}
          `}
        >
          <div
            className={clsx("px-2 max-w-[350px] rounded-t-2xl flex", {
              "rounded-l-2xl": sentByCurrentUser,
              "rounded-r-2xl": !sentByCurrentUser,
              "bg-blue-500": sentByCurrentUser,
              "bg-teal-400": !sentByCurrentUser,
              "dark:bg-gray-700": !sentByCurrentUser,
            })}
          >
            {!sentByCurrentUser && groupMessage && (
              <Paragraph className="font-bold text-left self-start">
                abolfazl
              </Paragraph>
            )}

            <Paragraph size={"sm"} className="text-white m-0">
              سلام بر تو ای{" "}
            </Paragraph>
            <Paragraph className="m-0 !text-sm text-end self-end mt-5">
              5:55
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
