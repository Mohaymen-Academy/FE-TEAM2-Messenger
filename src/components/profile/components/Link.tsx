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
      className: "bg-secondary text-primary border-r-8 border-lime-500",
      position: "bottom-center",
    });
  };

  return (
    <HoverWrapper className="flex" onClick={handleCopy}>
      <div className="flex items-center">
        <AiOutlineLink className="icon-button ml-4 round" size={25} />
        <div>
          <Paragraph>{href}</Paragraph>
          <Paragraph size="xs" className="text-secondary font-bold">
            لینک
          </Paragraph>
        </div>
      </div>
      <Toaster />
    </HoverWrapper>
  );
};

export default Link;
