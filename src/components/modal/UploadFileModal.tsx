import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui";
import Modal from "./ParentModal";
import { StoreStateTypes } from "@/utils/types";
import { onUploadClose } from "@/redux/Slices/modalSlice";
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
    (store: StoreStateTypes) => store.modal.isUploadOpen
  );

  const body = (
    <>
      <div className="bg-primary w-full sm:w-[400px] md:w-[500px] lg:w-[600px]  py-5 px-8 rounded-xl max-h-[100%] overflow-y-auto flex flex-col ">
        <div className="mb-6 rounded-xl overflow-hidden">
          {fileType?.type === "file" && "FILE"}
          {fileType?.type === "video" && <video src={fileType?.url} controls />}
          {fileType?.type === "image" && <img src={fileType?.url} />}
        </div>

        <FloatingLabelInput
          onChange={(e: any) => setMediaMessages(e.target.value)}
          type="text"
          label="عنوان..."
        />
        <div className="flex justify-between gap-3 mt-3">
          <Button
            onClick={onSubmit}
            className="w-full  transition-all duration-200 hover:bg-red-500 !bg-btn-danger dark:hover:bg-red-600 !text-white"
          >
            <span className="sr-only">ارسال</span>
            ارسال
          </Button>
          <Button
            onClick={() => dispatch(onUploadClose())}
            className="w-full transition-all duration-200"
          >
            <span className="sr-only">انصراف</span>
            انصراف
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Modal
      onSubmit={() => {}}
      body={body}
      actionLabel="تایید"
      secondaryActionLabel="خروج"
      isOpen={isOpen}
      onClose={() => dispatch(onUploadClose())}
    />
  );
};

// const LogOutModal = () => {
//   return <Modal body={<LogOutConfirm />} />;
// };

export default UploadFileModal;
