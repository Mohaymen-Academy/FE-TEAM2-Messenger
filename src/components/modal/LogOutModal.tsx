import { useDispatch, useSelector } from "react-redux";
import { Button, Paragraph } from "../ui";
import Modal from "./ParentModal";
import { StoreStateTypes } from "@/utils/types";
import { onSignOutClose } from "@/redux/Slices/modalSlice";
import { useNavigate } from "react-router-dom";
import { emptyUser } from "@/redux/Slices/userSlice";

const LogOutModal = () => {
  const isOpen = useSelector(
    (store: StoreStateTypes) => store.modal.isSignOutOpen
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(emptyUser());
    navigate("/auth/sign-in");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    dispatch(onSignOutClose());
  };
  const body = (
    <div className="bg-primary w-50% md:w-[40%] py-5 px-8 rounded-xl">
      <Paragraph className="mb-6 text-center">
        آیا از خروج مطمئن هستید؟
      </Paragraph>
      <div className="flex justify-between gap-3">
        <Button
          onClick={onSubmit}
          className="w-full  transition-all duration-200 hover:bg-red-500 !bg-btn-danger dark:hover:bg-red-600 !text-white"
        >
          بله
        </Button>

        <Button
          onClick={() => dispatch(onSignOutClose())}
          className="w-full transition-all duration-200"
        >
          خیر
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      onSubmit={() => {}}
      body={body}
      actionLabel="تایید"
      secondaryActionLabel="خروج"
      isOpen={isOpen}
      onClose={() => dispatch(onSignOutClose())}
    />
  );
};

// const LogOutModal = () => {
//   return <Modal body={<LogOutConfirm />} />;
// };

export default LogOutModal;
