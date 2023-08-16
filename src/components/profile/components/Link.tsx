import HoverWrapper from "@/components/wrappers/HoverWrapper";
import { AiOutlineLink } from "react-icons/ai";
import { useCopyToClipboard } from "react-use";
import { Paragraph } from "@/components/ui";
import { toast } from "react-toastify";
import useToastify from "@/hooks/useTostify";

interface linkProps {
  href: string;
}

const Link: React.FC<linkProps> = ({ href }) => {
  const [, copyToClipboard] = useCopyToClipboard();

  const tostify = useToastify();

  const handleCopy = () => {
    copyToClipboard(href);
    tostify.info("لینک کپی شد.");
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
    </HoverWrapper>
  );
};

export default Link;
