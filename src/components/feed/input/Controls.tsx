import { Button } from "@/components/ui";
import { merge } from "@/utils/merge";
import { HTMLAttributes } from "react";
import {
  FaBold,
  FaEyeSlash,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";

interface controlsProps extends HTMLAttributes<HTMLDivElement> {}

const Controls: React.FC<controlsProps> = ({ className, ...props }) => {
  return (
    <div className={merge("absolute top-0 flex left-10", className)} {...props}>
      <Button className="w-9 h-9 border-gray-200 rounded-none rounded-r-lg">
        <FaBold size={18} />
      </Button>
      <Button className="w-9 h-9 border-r border-gray-200 rounded-none">
        <FaItalic size={18} />
      </Button>
      <Button className="w-9 h-9 border-r border-gray-200 rounded-none">
        <FaUnderline size={18} />
      </Button>
      <Button className="w-9 h-9 border-r border-gray-200 rounded-none">
        <FaStrikethrough size={18} />
      </Button>
      <Button className="w-9 h-9 border-r border-gray-200 rounded-none rounded-l-lg">
        <FaEyeSlash size={18} />
      </Button>
    </div>
  );
};

export default Controls;
