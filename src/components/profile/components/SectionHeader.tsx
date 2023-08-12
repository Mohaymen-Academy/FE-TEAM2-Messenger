import React, { ComponentType } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Button, Paragraph } from "@/components/ui";

interface sectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<sectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center py-2 px-4 shadow">
      <Button variant="ghost" className="h-12 w-12 ml-4">
        <AiOutlineClose className="icon-button" size={25} />
      </Button>
      <Paragraph size="xl">{title}</Paragraph>
    </div>
  );
};

const withEdit = (WrappedComponent: ComponentType<sectionHeaderProps>) => {
  return ({ title }: sectionHeaderProps) => {
    return (
      <div className="relative">
        <WrappedComponent title={title} />
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
