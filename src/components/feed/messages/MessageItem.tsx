import Avatar from "@/components/ui/avatar/Avatar";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import clsx from "clsx";
import avatar from "../../../assets/img/lightBg.svg"


interface MessageItemProps {
  message: string;
  sentByCurrentUser: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, sentByCurrentUser }) => {
  return (
    <div
      className={`
      flex-row
        p-4
        gap-4
        justify-${sentByCurrentUser ? "end" : "start"}
    `}
    >
      {!sentByCurrentUser && (
        <div className="flex justify-end ">
          {/* <Avatar size="sm" name={message.sender?.username ? message.sender.username : "USER"} /> */}
          <Avatar imgSrc={avatar} className="mb-3 " />
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
        >
          {!sentByCurrentUser &&  (
            <Paragraph className="font-bold text-left">abolfazl</Paragraph>
          )}
          <Paragraph size={"xs"} className="text-sm text-gray-950">
            1402/10/12
          </Paragraph>
        </div>
        <div
          className={`
          flex 
          justify-${sentByCurrentUser ? "start" : "end"}
          `}
        >
          <div
            className={clsx(
              "px-3 py-2  max-w-[350px] rounded-b-3xl",
              {
                "rounded-l-3xl": sentByCurrentUser,
                "rounded-r-3xl": !sentByCurrentUser,
                "bg-blue-500" : sentByCurrentUser,
                "bg-teal-400" : !sentByCurrentUser,
                "dark:bg-gray-700" : !sentByCurrentUser
              }
            )}
          >
            <Paragraph size={"sm"} className="text-white m-0">سلام بر تو ای </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
