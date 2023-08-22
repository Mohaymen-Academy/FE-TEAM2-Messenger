import { Paragraph } from "@/components/ui";
import HoverWrapper, {
  hoverWrapperProps,
} from "@/components/wrappers/HoverWrapper";
import React, { ReactNode } from "react";

interface profileItemProps extends hoverWrapperProps {
  icon?: ReactNode;
  title?: string;
}

const ProfileItemWithIcon: React.FC<profileItemProps> = ({
  icon,
  title,
  ...props
}) => {
  return (
    <HoverWrapper className="justify-start p-3" {...props}>
      {icon}
      <Paragraph>{title}</Paragraph>
    </HoverWrapper>
  );
};

export default ProfileItemWithIcon;
