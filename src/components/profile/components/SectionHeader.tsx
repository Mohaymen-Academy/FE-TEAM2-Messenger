import React, { ComponentType } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Button, Paragraph } from "@/components/ui";
import { setShow } from "@/redux/Slices/profileSlice";
import { useDispatch } from "react-redux";

interface sectionHeaderProps {
  title: string;
  withClose?: boolean;
}

const SectionHeader: React.FC<sectionHeaderProps> = ({ title, withClose }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center py-2 px-4 h-[61px]">
      {withClose && (
        <Button
          onClick={() => dispatch(setShow({ show: false }))}
          variant="ghost"
          className="h-12 w-12 ml-4"
        >
          <AiOutlineClose className="icon-button" size={25} />
        </Button>
      )}
      <Paragraph size="xl">{title}</Paragraph>
    </div>
  );
};

const withEdit = (WrappedComponent: ComponentType<sectionHeaderProps>) => {
  return ({ title, withClose }: sectionHeaderProps) => {
    return (
      <div className="relative h-[61px]">
        <WrappedComponent withClose={withClose} title={title} />
        <Button
          variant="ghost"
          className="h-12 w-12 ml-4 z-10 left-2 absolute top-2"
        >
          <FiEdit2 className="icon-button" size={25} />
        </Button>
      </div>
    );
  };
};

export const SectionHeaderWithEdit = withEdit(SectionHeader);

export default SectionHeader;
