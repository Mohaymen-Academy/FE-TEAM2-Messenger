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
        "h-12 w-12 text-center relative bg-orange-300 rounded-full"
      )}
      {...props}
    >
      <div className="absolute w-3 h-3 border rounded-full bg-green-500 top-1 right-1"></div>
      {imgSrc && <img className="rounded-full w-full h-full " src={imgSrc} />}
    </div>
  );
};

export default Avatar;
