import clsx from "clsx";
import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";

interface MessagesProps {
  userId: string;
  conversationId: string;
}
const Messages: React.FC<MessagesProps> = ({}) => {
  const profileShow = useSelector(
    (store: StoreStateTypes) => store.profile.show
  );
  return (
    <div className="flex flex-col justify-end overflow-hidden">
      <div
        className={clsx(
          "flex flex-col-reverse overflow-auto h-full px-2 lg:px-[5%] xl:px-[10%] custom-scrollbar transition-[padding]",
          { "xl:!px-2": profileShow }
        )}
      >
        {/* {data.messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} sentByCurrentUser={msg.sender?.id === userId} />
        ))} */}
        <MessageItem
          groupMessage
          message={
            " سشسسشسسشسشسشسشسشستیباتسیذبتنصنیتصنثصضنثنضصستنساتدذسذزدسیذزدسیتزذصتیضصیشسنکیمصضحیحخصثبنتثصنختصایعهثابتثثا    بثدتیدزظینزسیتابثنمسئیثصبیئنسیئزمئسیتنشسئمظئسلام"
          }
          sentByCurrentUser={true}
        />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={true} />
        <MessageItem
          groupMessage={true}
          message={
            "سشنیتسابتیسذباسذیسشذز زتسذتسیتنشسدتنسشدطتنسشیتنسدشتطندشستنیتنسشدطتنسشیتنسشیتندسشیسایتسنشدتنسیتنسشابنتسشدیتنسابنمسشئینمسئسبتسینابتنیابتنسیتنسباتیابتنیسبتاسیبنتیدزتنیدتنسیزت"
          }
          sentByCurrentUser={false}
        />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} />
      </div>
    </div>
  );
};

export default Messages;
