import Modal from "./ParentModal";
import { Button } from "../ui";
import { RxCross1 } from "react-icons/rx";
import { BsDownload } from "react-icons/bs";
import { onMediaClose } from "@/redux/Slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";

const ImageModal = () => {
  const isOpen = useSelector(
    (store: StoreStateTypes) => store.modal.isMediaOpen
  );
  const imageUrl = useSelector(
    (store: StoreStateTypes) => store.modal.mediaUrl
  );
  const dispatch = useDispatch();
  const body = (
    <div className="w-full flex flex-col items-center justify-center h-[90vh]">
      <div className="flex absolute gap-2 top-0 right-4">
        <Button
          onClick={() => dispatch(onMediaClose())}
          variant="ghost"
          className="p-5 py-9 hover:bg-slate-400/20"
        >
        <span className="sr-only">بستن این صفحه</span>
          <RxCross1 className="text-white" size={40} />
        </Button>
        <Button
          onClick={() => {
            const linkElement = document.createElement("a");
            linkElement.href = imageUrl.url;
            linkElement.setAttribute("download", imageUrl.name);

            linkElement.style.display = "none";
            document.body.appendChild(linkElement);

            linkElement.click();

            document.body.removeChild(linkElement);
          }}
          variant="ghost"
          className="p-5 py-9 hover:bg-slate-400/20"
        >
          <BsDownload className="text-white" size={40} />
          <span className="sr-only">دانلود عکس</span>
        </Button>
      </div>

      {!!imageUrl.url.length && (
        <div className=" rounded-lg max-h-[80vh] overflow-hidden shadow-lg ">
          <img className="w-full h-full" src={imageUrl.url} alt="عکس مودال" />
        </div>
      )}
    </div>
  );

  return (
    <Modal
      onSubmit={() => {}}
      body={body}
      actionLabel="تایید"
      secondaryActionLabel="خروج"
      isOpen={isOpen}
      onClose={() => dispatch(onMediaClose())}
    />
  );
};

export default ImageModal;
