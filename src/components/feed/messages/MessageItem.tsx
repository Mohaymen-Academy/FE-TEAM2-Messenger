import Avatar from "@/components/ui/avatar/Avatar";
import Paragraph from "@/components/ui/paragraph/Paragraph";

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
      hover:bg-white/20
        justify-${sentByCurrentUser ? "start" : "end"}
    `}
    >
      {!sentByCurrentUser && (
        <div className="flex items-end">
          {/* <Avatar size="sm" name={message.sender?.username ? message.sender.username : "USER"} /> */}
          <Avatar className="mb-3"/>
        </div>
      )}
      <div className="flex flex-col gap-1 w-full">
        <div
          className={`
          flex
          items-center
          gap-2
          justify-${sentByCurrentUser ? "end" : "start"}
        `}
        >
          {!sentByCurrentUser && <Paragraph className="font-bold text-left">abolfazl</Paragraph>}
          <Paragraph className="text-sm text-white/70">1402/10/12</Paragraph>
        </div>
        <div
          className={`
          flex 
          justify-${sentByCurrentUser ? "end" : "start"}
          `}
        >
          <div
            className={`
              ${sentByCurrentUser ? "bg-blue-600" : "bg-white/40"}
              px-3
              py-2
              rounded-b-3xl
              rounded-l-3xl
              max-w-[350px]
              
           `}
          >
            <p className="text-white">سلام بر تو ای </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
