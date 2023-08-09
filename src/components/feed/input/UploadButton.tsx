//@ts-nocheck
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import Button from "@/components/ui/button/Button";
import { IoMdImages } from "react-icons/io";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useRef, useState } from "react";
import { FilePondFile } from "filepond";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UploadButton = () => {
  const [files, setFiles] = useState<FilePondFile[]>([]);

  const handleFileUpload = (fileItems: FilePondFile[]) => {
    setFiles(fileItems);
  };

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" className="group">
        <IoMdImages className="icon z-30" />
      </Button>
      <FilePond
        element={<h1>hi</h1>}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        name="files"
        labelIdle=""
      />
    </div>
  );
};

export default UploadButton;
