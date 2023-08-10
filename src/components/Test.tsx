import React from "react";
import HoverWrapper from "./wrappers/HoverWrapper";
import Avatar from "./ui/avatar/Avatar";
import Paragraph from "./ui/paragraph/Paragraph";
import GroupCreator from "./profile/GroupProfile";
import GroupProfile from "./profile/GroupProfile";

const Test = () => {
  return (
    <div>
      <GroupProfile
        // imgSrc="/src/assets/img/forTestMustBeDeleted.jpeg"
        profileName="بهروز"
      />
    </div>
  );
};

export default Test;
