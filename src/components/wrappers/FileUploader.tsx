import React from "react";
import ProfileImage from "../ui/ProfileImage";
import { UseFormSetValue, FieldValues } from "react-hook-form";

interface FileUploaderProps {
  accept: string; // MIME types accepted, e.g., 'image/*', 'video/*', '.pdf', etc.
  //   label: string; // Label for the upload button
  width?: number; // Optional width for the component
  setImage: UseFormSetValue<FieldValues>;
  imageSelectHandler: (e: any) => any;
  imgUrl?: string;
}

const ProfileUploader: React.FC<FileUploaderProps> = ({
  accept,
  width,
  // setImage,
  imgUrl,
  imageSelectHandler,
}) => {
  // const imageSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     //set form Data contains of selected image in react hook form
  //     setImage("profilePicture", file);

  //     //create a url from file to show in form
  //     const imageUrl = URL.createObjectURL(file);
  //     setSelectedImage(imageUrl);
  //   }
  // };

  return (
    <div>
      <label htmlFor="fileInput" className="cursor-pointer">
        <div
          className="aspect-square flex justify-center items-center overflow-hidden rounded-full bg-slate-300"
          style={{ width: width || 100 }}
        >
          {imgUrl && imgUrl.length > 0 ? (
            <img
              className="w-full h-full"
              src={imgUrl}
              alt="selected profile image"
            />
          ) : (
            <ProfileImage width={200} />
          )}
        </div>
      </label>
      <input
        type="file"
        id="fileInput"
        accept={accept}
        style={{ display: "none" }}
        onChange={imageSelectHandler}
      />
    </div>
  );
};

export default ProfileUploader;
