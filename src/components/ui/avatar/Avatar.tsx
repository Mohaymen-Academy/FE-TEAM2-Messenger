import { merge } from "@/utils/merge";
import { HTMLAttributes } from "react";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  isOnline: boolean;
}
   
const Avatar : React.FC<AvatarProps> = ({isOnline , className, ...props}) => {
  return <div className={merge(className, "h-16 w-16 rounded-full bg-red-600 text-center relative")} {...props}>
            <div className="absolute w-3 h-3 border rounded-full bg-green-500 top-1 right-2"></div>
            <img className="w-full h-full rounded-full" />
        </div>;
};

export default Avatar;
