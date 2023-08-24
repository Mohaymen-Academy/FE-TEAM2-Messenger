import SkeletonReactangle from "@/components/skeletonTest/SkeletonReactangle";
import { Paragraph } from "@/components/ui";
import HoverWrapper, {
  hoverWrapperProps,
} from "@/components/wrappers/HoverWrapper";
import React, { ReactNode } from "react";

interface profileItemProps extends hoverWrapperProps {
  icon?: ReactNode;
  title?: string;
  isLoading?: boolean;
}

const ProfileItemWithIcon: React.FC<profileItemProps> = ({
  icon,
  title,
  isLoading,
  ...props
}) => {
  return (
    <HoverWrapper className="justify-start p-3" {...props}>
      {icon}
      {isLoading ? (
        <SkeletonReactangle className="w-[100%] h-5 rounded-md" />
      ) : (
        <Paragraph>{title}</Paragraph>
      )}
    </HoverWrapper>
  );
};

export default ProfileItemWithIcon;
