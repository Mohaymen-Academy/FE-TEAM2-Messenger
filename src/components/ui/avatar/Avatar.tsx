import { merge } from "@/utils/merge";
import { HTMLAttributes } from "react";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  isOnline: boolean;
  imgSrc?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  isOnline,
  className,
  imgSrc,
  ...props
}) => {
  return (
    <div 
      className={merge(
        className,
        "w-12 h-12 text-center relative rounded-full mb-0"
      )}
      {...props}
    >
      {isOnline && (
        <div className="absolute w-3 h-3 border rounded-full bg-green-500 top-0 right-0"></div>
      )}
      {imgSrc && <img className="rounded-full w-full h-full " src={imgSrc} />}
    </div>
  );
};

export default Avatar;
