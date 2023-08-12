import { IconType } from "react-icons";
import { BsFillPeopleFill, BsBroadcastPin } from "react-icons/bs";

export const newSectionsButtonObject: {
  text: string;
  icon: IconType;
  target: "groupCreate" | "channelCreate";
}[] = [
  { icon: BsFillPeopleFill, text: "گروه جدید", target: "groupCreate" },
  { icon: BsBroadcastPin, text: "کانال جدید", target: "channelCreate" },
];
