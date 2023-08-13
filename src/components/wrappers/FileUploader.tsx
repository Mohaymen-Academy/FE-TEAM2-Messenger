import React, { useState } from "react";

interface FileUploaderProps {
  accept: string; // MIME types accepted, e.g., 'image/*', 'video/*', '.pdf', etc.
//   label: string; // Label for the upload button
  width?: number; // Optional width for the component
  
}

const FileUploader: React.FC<FileUploaderProps> = ({ accept, children, width , }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileUploader = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
     const imageUrl = URL.createObjectURL(file);
     setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <label htmlFor="fileInput" className="cursor-pointer">
        {selectedImage ? (
          <div>
            <img className="h-[100px] w-[100px] rounded-full" src={selectedImage} alt=""  />
            {/* {selectedFile.name} */}
            {/* <button onClick={() => setSelectedFile(null)}>Clear</button> */}
          </div>
        ) : (
          <div
            className="aspect-square flex justify-center items-center"
            style={{ width: width || 100 }}
          >
            {children}
          </div>
        )}
      </label>
      <input
        type="file"
        id="fileInput"
        accept={accept}
        style={{ display: "none" }}
        onChange={handleFileUploader}
      />
    </div>
  );
};

export default FileUploader;
