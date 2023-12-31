import React from "react";
import { TbCameraPlus } from "react-icons/tb";

interface profileImageProps {
  width?: number;
}

const ProfileImage: React.FC<profileImageProps> = ({ width }) => {
  return (
    <div
      style={{ width }}
      className={`mx-auto aspect-square rounded-full bg-cyan-400 flex justify-center items-center cursor-pointer group shadow-md dark:shadow-gray-900 shadow-slate-500`}
    >
      <TbCameraPlus
        className={`text-white  group-hover:scale-90 transition-all duration-300 `}
        size={70}
        style={{ width }}
      />
    </div>
  );
};

export default ProfileImage;
