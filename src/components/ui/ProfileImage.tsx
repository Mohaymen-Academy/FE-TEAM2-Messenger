import React from "react";
import { TbCameraPlus } from "react-icons/tb";

interface profileImageProps {
  width?: number;
}

const ProfileImage: React.FC<profileImageProps> = ({ width }) => {
  return (
    <div
      className={`mx-auto w-[${width}px] aspect-square rounded-full bg-cyan-400 flex justify-center items-center cursor-pointer group`}
    >
      <TbCameraPlus
        className="text-white group-hover:scale-90 transition-all duration-300"
        size={100}
      />
    </div>
  );
};

export default ProfileImage;
