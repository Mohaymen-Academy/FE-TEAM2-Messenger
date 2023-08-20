import parse from "html-react-parser";
interface TextProps {
  content: string;
}

const Text: React.FC<TextProps> = ({ content }) => {
  if (!content) return null;
  return <div className="text-primary">{parse(content)}</div>;
};

export default Text;
