interface ImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = ({ src }) => {
  return (
    <div className="image-message">
      <img src={src} alt="Image" />
    </div>
  );
};

export default Image;