import React from "react";
import HoverWrapper from "./wrappers/HoverWrapper";
import Avatar from "./ui/avatar/Avatar";
import Paragraph from "./ui/paragraph/Paragraph";

const Test = () => {
  return (
    <div>
      <HoverWrapper>
        <Avatar isOnline={false} />
        <Paragraph>Hi There</Paragraph>
      </HoverWrapper>
    </div>
  );
};

export default Test;
