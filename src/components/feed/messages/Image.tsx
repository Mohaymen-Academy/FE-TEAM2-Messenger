import apiCall from "@/services/axiosInstance";
import React, { useEffect } from "react";

interface ImageProps {
  src: string;
}

const Image: React.FC<ImageProps> = ({ src }) => {
  
  useEffect(() => {
    const getData = async () => await apiCall.get(src);
    getData()
  }, []);
  // console.log(data);
  return (
    <div className="image-message">
      <img src={src} alt="Image" />
    </div>
  );
};

export default Image;
