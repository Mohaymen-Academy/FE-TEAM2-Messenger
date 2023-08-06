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
          <div className="w-12 h-12 rounded-full">A</div>
        </div>
      )}
      <div className="flex flex-col gap-1 w-full">
        <div
          className={`
          flex
          items-center
          justify-${sentByCurrentUser ? "end" : "start"}
        `}
        >
          {!sentByCurrentUser && <p className="font-bold text-left">abolfazl</p>}
          <p className="text-sm text-white/70">1402/10/12</p>
        </div>
        <div
          className={`
          flex 
          justify-${sentByCurrentUser ? "end" : "start"}
          `}
        >
          <div
            className={`
              ${sentByCurrentUser ? "bg-blue-600" : "bg-white/20"}
              px-3
              py-2
              rounded-2xl
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
