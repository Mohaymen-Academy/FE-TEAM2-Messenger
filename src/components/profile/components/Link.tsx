import Paragraph from "@/components/ui/paragraph/Paragraph";
import HoverWrapper from "@/components/wrappers/HoverWrapper";
import { AiOutlineLink } from "react-icons/ai";
import { useCopyToClipboard } from "react-use";
import toast, { Toaster } from "react-hot-toast";

interface linkProps {
  href: string;
}

const Link: React.FC<linkProps> = ({ href }) => {
  const [, copyToClipboard] = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(href);
    toast.success("لینک کپی شد.", {
      duration: 1500,
      className: "bg-secondary text-primary",
      position: "bottom-center",
    });
  };

  return (
    <HoverWrapper className="flex" onClick={handleCopy}>
      <div className="flex items-center">
        <AiOutlineLink className="icon-button ml-4" size={25} />
        <Paragraph>{href}</Paragraph>
      </div>
      <Toaster />
    </HoverWrapper>
  );
};

export default Link;
