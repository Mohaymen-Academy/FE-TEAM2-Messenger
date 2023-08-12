import React from "react";
import HoverWrapper from "./wrappers/HoverWrapper";
import Avatar from "./ui/avatar/Avatar";
import Paragraph from "./ui/paragraph/Paragraph";
import GroupCreator from "./profile/GroupCreator";
import GroupProfile from "./profile/GroupProfile";
import ChannelCreator from "./profile/ChannelCreator";
import UserProfile from "./profile/UserProfile";

const Test = () => {
  return (
    <div>
      <GroupCreator />
      {/* <ChannelCreator /> */}
      {/* <UserProfile profileName="Mohammad" /> */}
      {/* <GroupProfile profileName="بهروز" /> */}
    </div>
  );
};

export default Test;
