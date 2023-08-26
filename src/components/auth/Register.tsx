import FloatingLabelInput from "./input/FloatingLabelInput";
import { Button } from "../ui";
import { useNavigate } from "react-router-dom";
import ProfileUploader from "../wrappers/FileUploader";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateTypes } from "@/utils/types";
import { useState } from "react";
import { sendPicture, updateInfo } from "@/services/api/user";
import useToastify from "@/hooks/useTostify";
import { useMutation } from "react-query";
import "cropperjs/dist/cropper.css";
import CropperModal from "../modal/CropperModal";
import { onCropperOpen } from "@/redux/Slices/modalSlice";
import { setProfileImageURL } from "@/redux/Slices/appSlice";

const Register = () => {
  const navigate = useNavigate();
  const { profileImageURL } = useSelector(
    (store: StoreStateTypes) => store.app
  );
  const toastify = useToastify();
  const [formData, setFormData] = useState(new FormData());
  // const [pictureUrl, setPictureUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const sendPictureMutation = useMutation(sendPicture, {
    onError: () => {
      toastify.error("متاسفانه عکس ذخیره نگردید لطفا مجددا تلاش فرمایید");
    },
  });

  const setInfoMutation = useMutation(updateInfo, {
    onError: () => {
      toastify.error("اطلاعات دخیره نگردید لطفا مجددا تلاش فرمایید");
    },
  });

  const userId = useSelector(
    (store: StoreStateTypes) => store.user.user.userId
  );
  const { register, setValue, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      fName: "",
      lName: "",
      bio: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { fName, lName } = data;
    setLoading(true);

    await Promise.all([
      sendPictureMutation.mutateAsync(formData),
      setInfoMutation.mutateAsync({
        userId: userId,
        firstName: fName,
        lastName: lName,
        bio: undefined,
        email: undefined,
      }),
    ]);
    toastify.success("اطلاعات با موفقیت ذخیره شد");
    navigate("/chat");

    setLoading(false);
    dispatch(setProfileImageURL(""));
  };

  const imageSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      setFormData(formData);

      const imageUrl = URL.createObjectURL(file);
      dispatch(setProfileImageURL(imageUrl));
      dispatch(onCropperOpen());
    }
  };
  return (
    <div className="dark flex flex-col items-center bg-primary p-8 rounded-2xl">
      <ProfileUploader
        imgUrl={profileImageURL}
        setImage={setValue}
        width={150}
        accept="image/*"
        imageSelectHandler={imageSelectHandler}
      />

      <CropperModal imgURL={profileImageURL} />

      <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-5 my-6">
        <FloatingLabelInput
          type="text"
          register={register}
          required
          formId="fName"
          label="نام"
        />

        <FloatingLabelInput
          register={register}
          type="text"
          formId="lName"
          label="نام خانوادگی"
        />
      </div>

      <Button
        isLoading={loading}
        onClick={handleSubmit(onSubmit)}
        className="w-full"
      >
        <span className="sr-only">تایید</span>
        تایید
      </Button>
    </div>
  );
};

export default Register;
