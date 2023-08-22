import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui";
import Modal from "./ParentModal";
import { StoreStateTypes } from "@/utils/types";
import { onClose } from "@/redux/Slices/modal/UploadModalSlice";
import FloatingLabelInput from "../auth/input/FloatingLabelInput";

interface UploadFileModalType {
  onSubmit: (e: any) => any;
  fileType?: {
    type: "file" | "image" | "video";
    format: string;
    url: string;
  };
  setMediaMessages: React.Dispatch<React.SetStateAction<string>>;
}

const UploadFileModal: React.FC<UploadFileModalType> = ({
  onSubmit,
  fileType,
  setMediaMessages,
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (store: StoreStateTypes) => store.uploadModal.isOpen
  );

  const body = (
    <>
      <div className="bg-primary w-[60vw] py-5 px-8 rounded-xl max-h-[100%] overflow-y-auto flex flex-col ">
        <div className="mb-6 rounded-xl overflow-hidden">
          {fileType?.type === "file" && "FILE"}
          {fileType?.type === "video" && <video src={fileType?.url} controls />}
          {fileType?.type === "image" && <img src={fileType?.url} />}
        </div>

        <FloatingLabelInput
          onChange={(e) => setMediaMessages(e.target.value)}
          type="text"
          label="عنوان..."
        />
        <div className="flex justify-between gap-3 mt-3">
          <Button
            onClick={onSubmit}
            className="w-full  transition-all duration-200 hover:bg-red-500 !bg-btn-danger dark:hover:bg-red-600 !text-white"
          >
            ارسال
          </Button>
          <Button
            onClick={() => dispatch(onClose())}
            className="w-full transition-all duration-200"
          >
            انصراف
          </Button>
        </div>
      </div>
    </>
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

// const LogOutModal = () => {
//   return <Modal body={<LogOutConfirm />} />;
// };

export default UploadFileModal;
