interface TextProps {
  content: string;
}

const Text: React.FC<TextProps> = ({ content }) => {
  return <div className="text-message">
    {content}
    </div>;
};

export default Text;
