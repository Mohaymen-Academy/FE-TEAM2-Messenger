import React from "react";
import Modal from "./ParentModal";
import { Button } from "../ui";
import { RxCross1 } from "react-icons/rx";
import { BsDownload } from "react-icons/bs";
import { onClose } from "@/redux/Slices/modal/logOutModalSlice";
import img from "@/assets/img/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";

const ImageModal = () => {
  const isOpen = useSelector(
    (store: StoreStateTypes) => store.logOutModal.isOpen
  );
  const dispatch = useDispatch();
  const body = (
    <div className="w-full flex flex-col self-center gap-8 items-center my-auto">
      <div className="w-full">
        <Button
          onClick={() => dispatch(onClose())}
          variant="ghost"
          className="p-3 hover:bg-slate-400/20"
        >
          <span className="sr-only">بستن این صفحه</span>
          <RxCross1 className="text-white" size={30} />
        </Button>
      </div>
      <div className="w-[20%]">
        <img className="" src={img} alt="" />
      </div>

      <div className="w-full">
        <Button variant="ghost" className="p-3 hover:bg-slate-400/20">
          <BsDownload className="text-white" size={30} />
          <span className="sr-only">دانلود عکس</span>
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      body={body}
      actionLabel="تایید"
      secondaryActionLabel="خروج"
      isOpen={isOpen}
      onClose={() => dispatch(onClose())}
    />
  );
};

export default ImageModal;
