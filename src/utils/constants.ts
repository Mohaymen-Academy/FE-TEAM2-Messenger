import { IconType } from "react-icons";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";

export const countries = [
  {
    dialCode: "98",
    country: "IR",
  },
  {
    dialCode: "1",
    country: "US",
  },
];

export const newSectionsButtonObject: {
  text: string;
  icon: IconType;
  target: "groupCreate" | "channelCreate" | "contactCreate";
}[] = [
  { icon: BsFillPersonFill, text: "مخاطب جدید", target: "contactCreate" },
  { icon: BsFillPeopleFill, text: "گروه جدید", target: "groupCreate" },
  { icon: HiSpeakerphone, text: "کانال جدید", target: "channelCreate" },
];

// export const BASE_URL = "http://185.60.136.202:8080/";
// Kiarash
// export const BASE_URL = "http://192.168.70.214:8080/";
// export const BASE_URL = "http://192.168.70.242:8080/";
// Hossein
export const BASE_URL = "http://192.168.70.233:8080/";
// export const BASE_URL = "http://localhost:8080/";

export const MESSAGE_PER_PAGE = 50;
export const HAS_NEXT_PAGE_THRESHOLD = MESSAGE_PER_PAGE - 1;
