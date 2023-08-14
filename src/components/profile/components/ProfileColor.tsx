import { getRandomColor } from "@/utils/randomColor";
import React, { useEffect, useState } from "react";

interface profileColorProps {
  name: string;
}

const ProfileColor: React.FC<profileColorProps> = ({ name }) => {
  const [profileColor, setProfileColor] = useState("");

  useEffect(() => {
    setProfileColor(getRandomColor());
  }, []);

  return (
    <div
      className={"w-full h-full flex items-center justify-center"}
      style={{ backgroundColor: profileColor }}
    >
      <p className="text-[10rem] font-bold text-white select-none">{name[0]}</p>
    </div>
  );
};

export default ProfileColor;
