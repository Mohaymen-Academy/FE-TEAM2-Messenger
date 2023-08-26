import React, { useRef } from "react";
import Modal from "./ParentModal";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { onCropperClose } from "@/redux/Slices/modalSlice";
import { Button } from "../ui";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { setProfileImageURL } from "@/redux/Slices/appSlice";

interface cropperModalProps {
  imgURL: string;
}

const CropperModal: React.FC<cropperModalProps> = ({ imgURL }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (store: StoreStateTypes) => store.modal.isCropperOpen
  );

  const onSubmit = () => {
    getCropData();
    dispatch(onCropperClose());
  };

  const cropperRef = useRef(null);

  const getCropData = () => {
    // @ts-ignore
    if (typeof cropperRef.current?.cropper !== "undefined") {
      dispatch(
        setProfileImageURL(
          // @ts-ignore
          cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
        )
      );
    }
  };

  const body = (
    <div className="w-11/12 max-w-[600px] h-fit">
      <Cropper
        ref={cropperRef}
        style={{ height: 400, width: "100%" }}
        className="bg-neutral-800/70"
        initialAspectRatio={1}
        aspectRatio={1}
        preview=".img-preview"
        src={imgURL}
        viewMode={1}
        minCropBoxHeight={100}
        minCropBoxWidth={100}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
        autoCrop={true}
        rotatable={false}
        scalable={false}
        zoomable={false}
      />
      <div className="flex justify-between gap-3 my-4">
        <Button
          onClick={onSubmit}
          className="w-full  transition-all duration-200 "
        >
          <span className="sr-only">تایید</span>
          تایید
        </Button>

        <Button
          onClick={() => dispatch(onCropperClose())}
          className="w-full transition-all duration-200 hover:bg-red-500 !bg-btn-danger dark:hover:bg-red-600 !text-white"
        >
          <span className="sr-only">انصراف</span>
          انصراف
        </Button>
      </div>
    </div>
  );
  return (
    <>
      <Modal
        onSubmit={() => {}}
        body={body}
        actionLabel="تایید"
        secondaryActionLabel="انصراف"
        isOpen={isOpen}
        onClose={() => dispatch(onCropperClose())}
      />
    </>
  );
};

export default CropperModal;
