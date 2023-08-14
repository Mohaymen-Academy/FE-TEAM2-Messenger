import HoverWrapper from "@/components/wrappers/HoverWrapper";
import { AiOutlineLink } from "react-icons/ai";
import { useCopyToClipboard } from "react-use";
import { Paragraph } from "@/components/ui";
import { toast } from "react-toastify";

interface linkProps {
  href: string;
}

const Link: React.FC<linkProps> = ({ href }) => {
  const [, copyToClipboard] = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(href);
    toast.success("لینک کپی شد.");
  };

  return (
    <HoverWrapper className="flex" onClick={handleCopy}>
      <div className="flex items-center">
        <AiOutlineLink className="icon-button ml-4 round" size={25} />
        <div>
          <Paragraph className="break-all">{href}</Paragraph>
          <Paragraph size="xs" className="text-secondary font-bold">
            لینک
          </Paragraph>
        </div>
      </div>
      {/* <Toaster /> */}
    </HoverWrapper>
  );
};

export default Link;
