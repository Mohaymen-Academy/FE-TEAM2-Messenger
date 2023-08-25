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
      <div className="text-[8rem] font-bold text-white select-none">
        {name ? name[0] : "-"}
      </div>
    </div>
  );
};

export default ProfileColor;
