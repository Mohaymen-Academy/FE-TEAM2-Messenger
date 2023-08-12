import Switch from "@/components/ui/switch/Switch";
import HoverWrapper from "@/components/wrappers/HoverWrapper";
import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Paragraph } from "@/components/ui";

const Notification = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  return (
    <HoverWrapper className="flex" onClick={handleCheckboxChange}>
      <div className="flex items-center">
        <IoMdNotifications className="icon-button ml-4" size={25} />
        <Paragraph>اعلان</Paragraph>
      </div>
      <Switch isChecked={isChecked} onClick={handleCheckboxChange} />
    </HoverWrapper>
  );
};

export default Notification;
