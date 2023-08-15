import clsx from "clsx";
import MessageItem from "./MessageItem";
import { useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import Message from "../Message";
import Text from "../Text";
import Image from "../Image";
import avatar from "../../../../assets/img/a.jpeg";
import Audio from "../Audio";
import mu from "../../../../assets/Shadmehr Aghili - Chera Too Jangi [320].mp3";

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


        {/* <MessageItem
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
        <MessageItem groupMessage message={"سلام"} sentByCurrentUser={false} /> */}

        <Message messageStatus="SEEN"  groupMessage={true} sentByCurrentUser={true}>
          <Text content="سلام جیگر طلاسشسشسسشسشسکمیمتیسبنتیستبمنیتبنبنیابنتیابنتیسزدتهیساعهیدسشتیهسشئزخسهتیهسشئطسشتینخسشئطستشیهختسشهخئسهخشیتختشستیخهسشیتخنسشتی"/>
        </Message>
        <Message messageStatus="PENDING" groupMessage={true} sentByCurrentUser={false}>
          <Text content="سمیبنخهسیبتسیدزتسشایهتیدتسشیتهسشدیسشتیدتهسشدیتهسشیدسشدیسشهیادسشهدینتسیدهشسیتنسشدتنشیدشستبدیسشتدبتنشسبسشتدبتب"/>
        </Message>
        <Message messageStatus="DELIVERED" groupMessage={false} sentByCurrentUser={true}>
          <Image src={avatar}/>
        </Message>
        <Message groupMessage={false} sentByCurrentUser={false}>
          <Audio src={mu}/>
        </Message>
      </div>
    </div>
  );
};

export default Messages;
