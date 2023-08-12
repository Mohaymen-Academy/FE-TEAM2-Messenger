import { IconType } from "react-icons";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";

export const newSectionsButtonObject: {
  text: string;
  icon: IconType;
  target: "groupCreate" | "channelCreate";
}[] = [
  { icon: BsFillPeopleFill, text: "گروه جدید", target: "groupCreate" },
  { icon: HiSpeakerphone, text: "کانال جدید", target: "channelCreate" },
];
