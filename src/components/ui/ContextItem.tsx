import React from 'react'
import { Paragraph } from '.'
import { VariantProps, cva } from 'class-variance-authority';
import HoverWrapper from '../wrappers/HoverWrapper';
import { merge } from '@/utils/merge';

const contextItemsVariants = cva("", {
  variants: {
    color: {
      default: "",
      danger : "!text-red-500",
    },
  },
  defaultVariants: {
    color: "default"
  }
});

interface ContextItemProps extends VariantProps<typeof contextItemsVariants> {
  children: JSX.Element;
  text: string;
}

const ContextItem:React.FC<ContextItemProps> = ({ children ,text, color}) => {
  return (
    <HoverWrapper className="flex gap-4 justify-normal px-3 py-2 rounded-xl">
      {children}
      <Paragraph size="sm" className={merge(contextItemsVariants({color}))}>{text}</Paragraph>
    </HoverWrapper>
  );
}

export default ContextItem