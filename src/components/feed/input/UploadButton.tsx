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
  const uploadRef = useRef(null);

  const handleFileUpload = (fileItems: FilePondFile[]) => {
    setFiles(fileItems);
  };

  return (
    <div>
      {/* <Button
        variant="ghost"
        size="sm"
        className="group"
        onClick={() => uploadRef.current._inputClone.click()}
      >
        <IoMdImages className="icon z-30" />
      </Button> */}
      <FilePond
        id="uploader"
        ref={uploadRef}
        element={<h1>hi</h1>}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        name="files"
        labelIdle="I am"
        stylePanelLayout=""
      />
    </div>
  );
};

export default UploadButton;
